import Search from "./ui/Search";
import AutocompleteUI from "./ui/Autocomplete";
import PriceRange from "./ui/PriceRange";
import { Filter } from "lucide-react";

interface SidebarFilterProps {
    className?: string;
    isModal?: boolean;
}

export default function SidebarFilter( {className, isModal}: SidebarFilterProps) {
  return (
    <div className={`${
        isModal ? "block w-[90%]" : "hidden md:flex"
      } w-100 mx-4 md:mx-10 xl:mx-15 px-2 py-4 flex-col gap-2 border border-gray-200 rounded-2xl ${className}`}>
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
