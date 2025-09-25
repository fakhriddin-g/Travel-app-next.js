"use client"

import {Slider} from "@heroui/react";

export default function PriceRange() {
  return (
    <Slider
      className="max-w-sm"
      defaultValue={[0, 1000]}
      formatOptions={{style: "currency", currency: "USD"}}
      label="Price Range"
      maxValue={1000}
      minValue={0}
      step={1}
      classNames={{
        track: "h-1",
        filler: "h-1",
        thumb: "w-4 h-4"
      }}
    />
  );
}
