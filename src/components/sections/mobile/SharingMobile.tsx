import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { IPhoneX } from "react-device-frames";

const MobileSharing = () => {
  return (
    <Carousel className="h-full max-w-[100%]">
      <CarouselContent className="mx-auto h-full">
        <CarouselItem className="px-2">
          <div className="mt-10">
            <h3 className="text-center text-xl">Share your designs</h3>
          </div>
          <div className="mt-10">
            <IPhoneX screenshot="" />
          </div>
        </CarouselItem>
        <CarouselItem className="px-2">
          <div className="mt-10">
            <h3 className="text-center text-xl">Share your designs</h3>
          </div>
          <div className="mt-10">
            <IPhoneX screenshot="" />
          </div>
        </CarouselItem>
        <CarouselItem className="px-2">
          <div className="mt-10">
            <h3 className="text-center text-xl">Share your designs</h3>
          </div>
          <div className="mt-10">
            <IPhoneX screenshot="" />
          </div>
        </CarouselItem>
        <CarouselItem className="px-2">
          <div className="mt-10">
            <h3 className="text-center text-xl">Share your designs</h3>
          </div>
          <div className="mt-10">
            <IPhoneX screenshot="" />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default MobileSharing;
