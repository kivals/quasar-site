"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const logos = [
  "/images/minstroy.png",
  "/images/gbu.png",
  "/images/iskra.png",
  "/images/laonit.png",
  "/images/mei.png",
  "/images/minstroy.png",
  "/images/minstroy.png",
];

function TrustedBlocks() {
  return (
    <div className="flex justify-center">
      <TrustedCarousel className="hidden lg:block" />
      <TrustedGrid className="lg:hidden" />
    </div>
  );
}

function TrustedGrid({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 gap-4 px-4", className)}>
      {logos.map((src, i) => (
        <TrustedItem src={src} key={i} />
      ))}
    </div>
  );
}

function TrustedItem({ src }: { src?: string }) {
  return (
    <div className="relative size-[150px] overflow-clip rounded-[20px] bg-white md:size-[250px]">
      <Image
        src={src || "/images/minstroy.png"}
        alt="MinStroy logo"
        fill
        className="object-contain opacity-50 grayscale"
      />
    </div>
  );
}

function TrustedCarousel({ className }: { className?: string }) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className={cn("w-full", className)}
    >
      <CarouselContent className="-ml-1">
        {logos.map((src, index) => (
          <CarouselItem key={index} className="pl-1 lg:basis-1/4">
            <TrustedItem src={src} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    /*<div className="grid xl:flex grid-rows-2 grid-cols-2 max-xl:w-[calc(100vw-2rem)] max-xl:aspect-square gap-2.5 xl:gap-10">
      <TrustedItem />
      <TrustedItem />
      <TrustedItem />
      <TrustedItem />
      <TrustedItem />
      <TrustedItem />
      <TrustedItem />
      <TrustedItem />
      <TrustedItem />
      <TrustedItem />
      <TrustedItem />
    </div>*/
  );
}

export default TrustedBlocks;
