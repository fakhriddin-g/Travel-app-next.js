"use client";

import { navItem } from "@/src/date/constans";
import { Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const icons = [Heart, ShoppingBag, User];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-10 xl:px-15 py-4">
        {/* Логотип */}
        <div className="flex items-center gap-2 font-bold">
          <span className="bg-black text-white px-2 py-1 rounded">TJ</span>
          <h2>Туры Таджикистана</h2>
        </div>

        {/* Меню ПК */}
        <nav className="hidden sm:flex gap-6">
          {navItem.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-red-500 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Иконки ПК */}
        <div className="hidden sm:flex gap-4">
          {icons.map((Icon, idx) => (
            <button key={idx} className="hover:text-red-700 transition">
              <Icon size={20} />
            </button>
          ))}
        </div>

        {/* Кнопка мобильного меню */}
        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <nav className="sm:hidden bg-gray-100 p-4 space-y-2">
          {navItem.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex gap-4 mt-2">
            {icons.map((Icon, idx) => (
              <button key={idx} className="hover:text-red-700">
                <Icon size={20} />
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
