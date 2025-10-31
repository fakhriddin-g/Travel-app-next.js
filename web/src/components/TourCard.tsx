"use client";

import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@heroui/react";
import { mockTours } from "../date/useTours";
import { Star, MapPin, Calendar, Users, Heart } from "lucide-react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 w-full">
      {mockTours.map((item, index) => (
        <Card key={index} isPressable shadow="sm">
          <CardBody
            className="overflow-visible p-0"
            onClick={() => router.push(`/tours/${item.id}`)}
          >
            <Image
              alt={item.title}
              className="w-full object-cover h-[140px]"
              radius="lg"
              shadow="sm"
              src={item.imageUrl}
              width="100%"
              height="220px"
            />
            <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
              <Badge
                classNames={{
                  base: "bg-accent rounded-lg text-light_text px-2 text-sm",
                }}
                isInvisible={true}
              >
                {item.category}
              </Badge>
              <Badge
                classNames={{
                  base: "bg-primary rounded-lg text-light_text px-2 text-sm",
                }}
                isInvisible={true}
              >
                {item.tourType}
              </Badge>
            </div>
          </CardBody>
          <CardBody
            className="text-small text-start flex flex-col justify-between w-full"
            onClick={() => router.push(`/tours/${item.id}`)}
          >
            <div className="felx flex-col mb-2">
              <h3 className="mb-2">
                <b>{item.title}</b>
              </h3>
              <p className="hidden md:flex text-[12px] leading-3">
                {item.description.length <= 60
                  ? item.description
                  : item.description.slice(0, 60) + "..."}
              </p>
            </div>
            <div className="hidden md:flex justify-between w-full mb-2">
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
            <div className="flex justify-between w-full">
              <span>
                от <b>${item.price}</b> с человека
              </span>
              <span>{item.reviewCount} отзывов</span>
            </div>
          </CardBody>
          <CardFooter className="flex items-center">
            <div className="flex items-center gap-2 w-full">
              <span className="bg-primary w-full py-2 rounded-2xl flex justify-center items-center text-light_text hover:text-dark_text hover:bg-secondary transition duration-400">
                В Карзину
              </span>
              <Heart className="text-primary hover:text-red-500 hover:fill-red-500" />
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
