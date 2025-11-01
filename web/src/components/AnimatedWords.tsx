"use client";

import { useEffect, useState } from "react";

const words = ["Таджикистану", "Миру"];

export default function AnimatedWords() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="min-w-content text-start bg-accent text-light_text font-semibold transition-all duration-500 uppercase px-2 py-1 rounded-sm text-3xl">
      <span key={words[index]} className="animate-fadeIn">
        {words[index]}
      </span>
    </span>
  );
}
