"use client";

import Header from "@/src/components/Header";
import { mockTours } from "@/src/date/useTours";
import { Image } from "@heroui/react";
import { ArrowLeft, Heart, MapPin, Share2, Star } from "lucide-react";
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
        <div className="grid grid-cols-3">
          {/* Header */}
          <div className="bg- col-span-3 flex justify-between items-center">
            <div className="flex">
              <button>
                <ArrowLeft />
              </button>
              <div className="">
                <h1>{tour.title}</h1>
                <div className="flex">
                  <div className="flex">
                    <MapPin />
                    <span>{tour.location}</span>
                  </div>
                  <div className="flex">
                    <Star />
                    <span>
                      {tour.rating} ({tour.reviewCount} отзывов)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <Heart />
              </div>
              <div>
                <Share2 />
              </div>
            </div>
          </div>

          {/* Left */}
          <div className="bg- col-span-2">
            <div><Image src={tour.imageUrl} width="100%" height="550px" /></div>
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
          <div className="bg-green-600">
            <div>
              <div><b>${tour.price}</b></div>
              <div>{tour.tourType}</div>
              <div>{tour.category}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
