"use client";

import { navItem } from "@/src/date/constans";
import { Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const icons = [Heart, ShoppingBag, User];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-100 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-10 xl:px-15 py-4">
        {/* Логотип */}
        <div className="flex items-center gap-2 font-bold">
          <span className="bg-primary text-white px-2 py-1 rounded">TJ</span>
          <h2 className="text-primary">Туры Таджикистана</h2>
        </div>

        {/* Меню ПК */}
        <nav className="hidden sm:flex gap-6">
          {navItem.map((item) => {
            const isActive = pathname.startsWith(item.href);
            console.log(isActive);
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`${isActive ? "text-primary" : "text-dark_text"}
                hover:text-primary transition`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Иконки ПК */}
        <div className="hidden sm:flex gap-4">
          {icons.map((Icon, idx) => (
            <button
              key={idx}
              className="hover:text-secondary text-primary transition"
            >
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
