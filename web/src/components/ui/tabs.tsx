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
  onChange?: (id: string) => void;
}

export default function TopFilterTabs({
  items,
  showHeader = true,
  onChange,
}: TopFilterTabsProps) {
  const [active, setActive] = useState(0);

  const selectedItem = items[active];

  const handleChange = (key: string) => {
    const index = items.findIndex((t) => t.id === key);
    if (index !== -1) {
      setActive(index);
      if (onChange) {
        onChange(key);
      }
    }
  };

  return (
    <div className="flex w-ful flex-col">
      {/* Заголовок и описание */}
      {selectedItem.title && showHeader && selectedItem && (
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
        onSelectionChange={(key) => handleChange(key as string)}
        className="flex justify-center items-center"
      >
        {items.map((item) => (
          <Tab key={item.id} title={item.label} />
        ))}
      </Tabs>
    </div>
  );
}