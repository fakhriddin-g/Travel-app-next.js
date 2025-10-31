import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import { mockGuides } from "../date/useGuide";
import {
  Star,
  MapPin,
  Languages,
  Clock,
  Award,
  CheckCircle,
  XCircle,
  Pause,
} from "lucide-react";

export default function GuideCard() {
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-3 w-full">
      {mockGuides.map((item, index) => (
        <Card
          key={index}
          isPressable
          shadow="sm"
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.name}
              className="w-full object-cover h-[140px]"
              radius="lg"
              shadow="sm"
              src={item.imageUrl}
              width="100%"
              height="200px"
            />
          </CardBody>
          <CardFooter className="text-small flex flex-col gap-2 justify-between text-dark_text">
            <b>{item.name}</b>
            <div className="flex justify-between items-center w-full">
              <span className="flex items-center gap-2">
                <Clock className="hidden md:flex" size={16} />
                Опыт: {item.experience}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="hidden md:flex" size={16} />
                {item.location}
              </span>
            </div>
            <div className="sm:flex sm:flex-row flex-col gap-1 wrap-anywhere items-center">
              <Languages className="hidden md:flex" size={18} />
              {item.languages.length > 2 ? (
                <div className="">
                  <p className="inline-flex border-1 border-gray-200 px-2 py-1 rounded-lg text-[11px]">
                    {item.languages[0]}
                  </p>
                  <p className="inline-flex border-1 border-gray-200 px-2 py-1 rounded-lg text-[11px]">
                    {item.languages[1]}
                  </p>
                  <p className="inline-flex border-1 border-gray-200 px-2 py-1 rounded-lg text-[11px]">
                    +{item.languages.length - 2}
                  </p>
                </div>
              ) : (
                <>
                  <p className="border-1 border-gray-200 px-2 py-1 rounded-lg text-[11px]">
                    {item.languages[0]}
                  </p>
                  <p className="border-1 border-gray-200 px-2 py-1 rounded-lg text-[11px]">
                    {item.languages[1]}
                  </p>
                </>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Award className="hidden md:flex" size={16} />
              {item.certifications.length >= 2 ? (
                <p>
                  {item.certifications[0]} +{item.certifications.length - 1}
                </p>
              ) : (
                <p>{item.certifications[0]}</p>
              )}
            </div>
            <div className="hidden md:flex">
              <p>
                {item.description.length <= 75
                  ? item.description
                  : item.description.slice(0, 75) + "..."}
              </p>
            </div>
            <div className="flex justify-between items-center w-full text-accent">
              <span>
                <b>${item.pricePerDay}</b>/день
              </span>
              <span className="bg-primary text-light_text hover:bg-secondary hover:text-dark_text px-4 py-1 transition duration-300 rounded-2xl uppercase text-sm">
                Выбрать гида
              </span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
