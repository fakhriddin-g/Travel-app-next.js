import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import { mockGuides } from "../date/useGuide";
import { span } from "framer-motion/client";
import { Languages } from "lucide-react";

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
          <CardFooter className="text-small flex flex-col gap-2 justify-between">
            <b>{item.name}</b>
            <div className="flex justify-between items-center w-full">
              <span>Опыт: {item.experience}</span>
              <span>{item.location}</span>
            </div>
            <div className="sm:flex sm:flex-row flex-col gap-1 wrap-anywhere items-center">
              <Languages size={18} />
              {item.languages.map((language) => (
                <span
                  key={language}
                  className="border-1 border-gray-200 px-2 py-1 rounded-lg text-[11px]"
                >
                  <b>{language}</b>
                </span>
              ))}
            </div>
            <div>
              {item.certifications.length >= 2 ? (
                <p>{item.certifications[0]} +1</p>
              ) : (
                item.certifications[0]
              )}
            </div>
            <div className="hidden md:flex">
              <p>
                {item.description.length <= 75
                  ? item.description
                  : item.description.slice(0, 75) + "..."
                }
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <span>
                <b>{item.pricePerDay}</b>/день
              </span>
              <button className="bg-black text-white px-4 py-1 transition duration-300 rounded-2xl">
                Выбрать гида
              </button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
