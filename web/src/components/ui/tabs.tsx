"use client";

import { Tabs, Tab } from "@heroui/react";
import { useState } from "react";

export default function TopFilterTabs() {
  const tabs = [
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
  ];

  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="flex w-full flex-col">
      {/* Заголовок и описание */}
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="font-bold text-2xl md:text-5xl">{selected.title}</h1>
        <p className="text-sm md:text-lg">{selected.content}</p>
      </div>

      {/* Табы снизу */}
      <Tabs
        aria-label="Dynamic tabs"
        items={tabs}
        // placement="bottom"
        onSelectionChange={(key) =>
          setSelected(tabs.find((t) => t.id === key)!)
        }
        className="flex justify-center items-center"
      >
        {(item) => <Tab key={item.id} title={item.label} />}
      </Tabs>
    </div>
  );
}
