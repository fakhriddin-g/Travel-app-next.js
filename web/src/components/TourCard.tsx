"use client";

import { Badge, Card, CardBody, CardFooter, Image } from "@heroui/react";
import { mockTours } from "../date/useTours";
import { Star, MapPin, Calendar, Users } from "lucide-react";

// interface TourCardProps {
//   id: string;
//   title: string;
//   description: string;
//   price: number;
//   duration: string;
//   imageUrl: string;
//   rating: number;
//   reviewCount: number;
//   category: string;
//   location: string;
//   maxGroupSize: number;
//   tourType: "local" | "international";
//   onSelect?: (id: string) => void;
// }

export default function TourCard() {
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full">
      {mockTours.map((item, index) => (
        <Card
          key={index}
          isPressable
          shadow="sm"
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full object-cover h-[140px]"
              radius="lg"
              shadow="sm"
              src={item.imageUrl}
              width="100%"
            />
            <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
              <Badge
                classNames={{
                  base: "bg-white/90 rounded-lg text-black px-2 text-sm",
                }}
                isInvisible={true}
              >
                {item.category}
              </Badge>
              <Badge
                classNames={{
                  base: "bg-green-400 rounded-lg text-white px-2 text-sm",
                }}
                isInvisible={true}
              >
                {item.tourType}
              </Badge>
            </div>
          </CardBody>
          <CardFooter className="text-small text-start flex flex-col justify-between">
            <div className="felx flex-col mb-2">
              <h3 className="mb-2">{item.title}</h3>
              <p className="text-[12px] leading-3">
                {item.description.length <= 60
                  ? item.description
                  : item.description.slice(0, 60) + "..."}
              </p>
            </div>
            <div className="flex justify-around w-full mb-2">
              <span className="flex items-center">
                <MapPin className="mr-1" size={14} />
                {item.location}
              </span>
              <span className="flex items-center">
                <Calendar className="mr-1" size={14} />
                {item.duration}
              </span>
              <span className="flex items-center">
                <Users className="mr-1" size={14} />
                {item.maxGroupSize}
              </span>
            </div>
            <div className="flex justify-around w-full">
              <span>
                от <b>${item.price}</b> с человека
              </span>
              <span>{item.reviewCount} отзывов</span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
