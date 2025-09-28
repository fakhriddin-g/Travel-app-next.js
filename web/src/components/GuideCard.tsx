import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import { mockGuides } from "../date/useGuide";

export default function GuideCard() {

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
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
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.name}</b>
            <p className="text-default-500">{item.pricePerDay}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
