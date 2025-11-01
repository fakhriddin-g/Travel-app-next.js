"use client";

import Header from "@/src/components/Header";
import { mockTours } from "@/src/date/useTours";
import { Button, Image } from "@heroui/react";
import {
  ArrowLeft,
  Heart,
  MapPin,
  Share2,
  ShoppingBag,
  Star,
} from "lucide-react";
import { useParams } from "next/navigation";

export default function TourPage() {
  const params = useParams();
  const { id } = params;

  const tour = mockTours.find((t) => t.id === id);

  if (!tour) {
    return <h1>Тур не найден</h1>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 md:px-10 xl:px-15 py-4">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
          {/* Header */}
          <div className="bg- col-span-3 flex justify-between items-center">
            <div className="flex">
              <div className="">
                <h1 className="text-2xl">{tour.title}</h1>
                <div className="flex gap-7">
                  <div className="flex items-center">
                    <MapPin size={18} className="text-primary fill-" />
                    <span>{tour.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Star size={18} className="fill-error text-error" />
                    <span>
                      {tour.rating} ({tour.reviewCount} отзывов)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 text-primary">
              <div className="">
                <Heart className="hover:text-accent hover:fill-accent" />
              </div>
              <div className="">
                <Share2 className="hover:text-primary hover:fill-primary" />
              </div>
            </div>
          </div>

          {/* Left */}
          <div className="bg-primary col-span-2">
            <div>
              <Image src={tour.imageUrl} width="100%" height="550px" />
            </div>
            <div>
              <h3>О туре</h3>
              <p>{tour.description}</p>
              <div>
                <div>{tour.duration}</div>
                <div>до {tour.maxGroupSize}</div>
                <div>{tour.location}</div>
                <div>{tour.category}</div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="bg-">
            <div className="border border-primary rounded-lg text-center p-6">
              <div className="flex justify-between mb-6">
                <span className="bg-primary rounded-lg text-light_text px-3 py-1 text-sm">
                  {tour.tourType}
                </span>
                <span className="bg-accent rounded-lg text-light_text px-3 py-1 text-sm">
                  {tour.category}
                </span>
              </div>

              <div className="flex flex-col">
                <b className="text-4xl">${tour.price}</b>
                <span>c человека</span>
              </div>

              <span className="block w-full h-0.5 bg-primary my-6" />

              <div className="flex flex-col gap-2">
                <Button className="w-full bg-primary text-light_text hover:bg-secondary hover:text-dark_text">
                  <ShoppingBag size={18}/>
                  Добавить в корзину
                </Button>
                <Button className="w-full bg-light_text border border-primary hover:bg-success hover:text-light_text">Забронировать сейчас</Button>
              </div>

              <span className="block w-full h-0.5 bg-primary my-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
