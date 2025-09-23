"use client";

import { Tabs, Tab } from "@heroui/react";
import { useState } from "react";

interface TabItem {
  id: string;
  label: string;
  title?: string;
  content?: string;
}

interface TopFilterTabsProps {
  items: TabItem[];
  showHeader?: boolean;
}

export default function TopFilterTabs({
  items,
  showHeader = true,
}: TopFilterTabsProps) {
  const [active, setActive] = useState(0);

  const selectedItem = items[active];

  return (
    <div className="flex w-full flex-col">
      {/* Заголовок и описание */}
      {showHeader && selectedItem && (
        <div className="flex flex-col gap-4 mb-6">
          <h1 className="font-bold text-2xl md:text-5xl">
            {selectedItem.title}
          </h1>
          <p className="text-sm md:text-lg">{selectedItem.content}</p>
        </div>
      )}

      {/* Табы снизу */}
      <Tabs
        aria-label="Dynamic tabs"
        onSelectionChange={(key) =>
          setActive(items.findIndex((t) => t.id === key)!)
        }
        className="flex justify-center items-center"
      >
        {items.map((item) => (
          <Tab key={item.id} title={item.label} />
        ))}
      </Tabs>
    </div>
  );
}
