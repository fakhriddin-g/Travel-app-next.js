import Search from "./ui/Search";
import AutocompleteUI from "./ui/Autocomplete";
import PriceRange from "./ui/PriceRange";
import { Filter } from "lucide-react";

export default function SidebarFilter() {
  return (
    <div className="hidden w-100 mx-4 md:mx-10 xl:mx-15 px-2 py-4 md:flex flex-col gap-2 border border-gray-200 rounded-2xl">
      <h2 className="flex items-center gap-2">
        <Filter size={20} />
        Фильтры поиска
      </h2>
      <Search />
      <AutocompleteUI />
      <PriceRange />
      <button className="w-full bg-gray-100 py-2 rounded-2xl cursor-pointer hover:bg-gray-200 transition duration-300">
        Очистить фильтры
      </button>
    </div>
  );
}
