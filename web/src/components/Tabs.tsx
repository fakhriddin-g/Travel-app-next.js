"use client";

import { useState } from "react";

interface TabProps {
  items: string[];
}

export default function Tabs({ items }: TabProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-wrap justify-between bg-gray-200 rounded-2xl p-1">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={`
            flex-1 min-w-[100px] mx-1 py-1 rounded-2xl transition
            ${active === index ? "bg-gray-500 text-white" : "hover:bg-gray-400"}
          `}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
