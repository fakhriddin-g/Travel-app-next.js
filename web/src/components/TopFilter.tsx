import TopFilterTabs from "./ui/tabs";

export default function TopFilter() {
  return (
    <div className="container mx-auto flex flex-col gap-5 text-center px-4 md:px-10 xl:px-15 py-4 h-100">
      {/* 1ый фильтр */}
      <div className="flex mx-auto">
        <TopFilterTabs />
      </div>

      {/* 2ой фильтр */}
      <div className="sm:flex justify-between bg-gray-200 rounded-2xl">
        <button className="px-1 sm:px-10lg:px-27 xl:px-36 2xl:px-46 py-2 hover:bg-gray-400 rounded-2xl cursor-pointer">
          Все туры
        </button>
        <button className="px-1 sm:px-17 lg:px-27 xl:px-36 2xl:px-46 py-2 hover:bg-gray-400 rounded-2xl cursor-pointer">
          Локальные
        </button>
        <button className="px-1 sm:px-17 lg:px-27 xl:px-36 2xl:px-46 py-2 hover:bg-gray-400 rounded-2xl cursor-pointer">
          Международные
        </button>
      </div>

      {/* 3ий фильтр */}
      <div className="sm:flex justify-between bg-gray-200 rounded-2xl">
        <button className="sm:px-1 lg:px-8 xl:px-13 2xl:px-18 py-2 hover:bg-gray-400 rounded-2xl cursor-pointer">
          Все туры
        </button>
        <button className="sm:px-3 lg:px-8 xl:px-13 2xl:px-18 py-2 hover:bg-gray-400 rounded-2xl cursor-pointer">
          Горные
        </button>
        <button className="sm:px-3 lg:px-8 xl:px-13 2xl:px-18 py-2 hover:bg-gray-400 rounded-2xl cursor-pointer">
          Культурные
        </button>
        <button className="sm:px-3 lg:px-8 xl:px-13 2xl:px-18 py-2 hover:bg-gray-400 rounded-2xl cursor-pointer">
          Приключения
        </button>
        <button className="sm:px-3 lg:px-8 xl:px-13 2xl:px-18 py-2 hover:bg-gray-400 rounded-2xl cursor-pointer">
          Исторические
        </button>
        <button className="sm:px-3 lg:px-8 xl:px-13 2xl:px-18 py-2 hover:bg-gray-400 rounded-2xl cursor-pointer">
          Природные
        </button>
      </div>
    </div>
  );
}
