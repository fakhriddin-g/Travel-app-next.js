"use client";

import { Autocomplete, AutocompleteItem } from "@heroui/react";

export const animals = [
  {
    label: "Cat",
    key: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Dog",
    key: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "Elephant",
    key: "elephant",
    description: "The largest land animal",
  },
  { label: "Lion", key: "lion", description: "The king of the jungle" },
  { label: "Tiger", key: "tiger", description: "The largest cat species" },
  { label: "Giraffe", key: "giraffe", description: "The tallest land animal" },
  {
    label: "Dolphin",
    key: "dolphin",
    description: "A widely distributed and diverse group of aquatic mammals",
  },
  {
    label: "Penguin",
    key: "penguin",
    description: "A group of aquatic flightless birds",
  },
  {
    label: "Zebra",
    key: "zebra",
    description: "A several species of African equids",
  },
  {
    label: "Shark",
    key: "shark",
    description:
      "A group of elasmobranch fish characterized by a cartilaginous skeleton",
  },
  {
    label: "Whale",
    key: "whale",
    description: "Diverse group of fully aquatic placental marine mammals",
  },
  {
    label: "Otter",
    key: "otter",
    description: "A carnivorous mammal in the subfamily Lutrinae",
  },
  {
    label: "Crocodile",
    key: "crocodile",
    description: "A large semiaquatic reptile",
  },
];

export default function AutocompleteUI() {
  return (
    <>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <div className="block">
          <h2 className="text-[14px]">Категория</h2>
          <Autocomplete className="" label="" placeholder="Все категории">
            {animals.map((animal) => (
              <AutocompleteItem key={animal.key}>
                {animal.label}
              </AutocompleteItem>
            ))}
          </Autocomplete>
        </div>
        <div className="block">
          <h2 className="text-[14px]">Регионы</h2>
          <Autocomplete
            className=""
            defaultItems={animals}
            label=""
            placeholder="Все регионы"
          >
            {(item) => (
              <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>
            )}
          </Autocomplete>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <div className="block">
          <h2 className="text-[14px]">Тип тура</h2>
          <Autocomplete
            className=""
            defaultItems={animals}
            label=""
            placeholder="Все типы"
          >
            {(item) => (
              <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>
            )}
          </Autocomplete>
        </div>
      </div>
    </>
  );
}
