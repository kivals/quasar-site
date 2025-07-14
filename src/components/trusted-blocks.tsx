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
  "/images/gbu.png",
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

function TrustedItem({ src }: { src: string }) {
  return (
    <div className="flex size-[150px] items-center justify-center overflow-clip rounded-[20px] bg-white p-8 md:size-[250px] 2xl:size-[250px]">
      <Image
        src={src}
        alt="MinStroy logo"
        width={250}
        height={250}
        className="object-contain"
      />
    </div>
  );
}

function TrustedCarousel({ className }: { className?: string }) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className={cn("w-full", className)}
    >
      <CarouselContent className="-ml-1 gap-x-3">
        {logos.map((src, index) => (
          <CarouselItem key={index} className="pl-1 lg:basis-1/4 xl:basis-1/4 2xl:basis-1/6">
            <TrustedItem src={src} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default TrustedBlocks;
