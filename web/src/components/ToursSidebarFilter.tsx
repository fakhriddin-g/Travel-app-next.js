import Search from "./ui/Search";
import AutocompleteUI from "./ui/Autocomplete";
import PriceRange from "./ui/PriceRange";
import { Filter } from "lucide-react";
import { mockTours } from "../date/useTours";

// const arr = [...new Set(mockTours.map((tour) => tour.category))]
// console.log(arr);
// mockTours.map((tour) => console.log(tour.category))

// const uniqueTours = mockTours.filter(
//   (tour, index, self) =>
//     index === self.findIndex((t) => t.category === tour.category)
// );



interface ToursSidebarFilterProps {
  isModal?: boolean;
}

export default function ToursSidebarFilter({
  isModal,
}: ToursSidebarFilterProps) {
  return (
    <div
      className={`${
        isModal ? "block w-[90%]" : "hidden lg:flex"
      } w-100 mx-4 md:mx-10 xl:mx-15 px-2 py-4 flex-col gap-2 border border-gray-200 rounded-2xl`}
    >
      <h2 className="flex items-center gap-2">
        <Filter size={20} />
        Фильтры поиска
      </h2>
      <Search
        items={mockTours.map((tour) => ({
          label: tour.title,
          key: tour.id?.toString() ?? "",
        }))}
      />
      <AutocompleteUI
        items={mockTours.map((tour) => ({
          key: tour.id?.toString() ?? "",
          category: tour.category,
          location: tour.location,
          tourType: tour.tourType,
        }))}
      />
      <PriceRange />
      <button className="w-full bg-gray-100 py-2 rounded-2xl cursor-pointer hover:bg-gray-200 transition duration-300">
        Очистить фильтры
      </button>
    </div>
  );
}
