import TopFilterTabs from "./ui/tabs";

export default function TopFilter() {
  return (
    <div className="container mx-auto flex flex-col gap-5 text-center px-4 md:px-10 xl:px-15 py-4 h-100">
      {/* 1ый фильтр */}
      <div className="flex mx-auto">
        <TopFilterTabs
          items={[
            {
              id: "1",
              label: "Готовые туры",
              title: "Популярные туры",
              content:
                "Выберите идеальное путешествие из нашей коллекции тщательно отобранных туров по Таджикистану",
            },
            {
              id: "2",
              label: "Персональные гиды",
              title: "Лучшие гиды",
              content:
                "Найдите персонального гида для вашего незабываемого путешествия по Таджикистану",
            },
          ]}
        />
      </div>

      <div className="">
        <TopFilterTabs
          items={[
            { id: "1", label: "Все туры" },
            { id: "2", label: "Горячие туры" },
            { id: "3", label: "Популярные" },
          ]}
        />

        <TopFilterTabs
          items={[
            { id: "1", label: "Все туры" },
            { id: "2", label: "Горные" },
            { id: "3", label: "Культурные" },
            { id: "4", label: "Приключения" },
            { id: "5", label: "Исторические" },
            { id: "6", label: "Природные" },
          ]}
        />
      </div>
    </div>
  );
}
