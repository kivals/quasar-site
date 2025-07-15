"use client";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PropsWithChildren } from "react";
import Image from "next/image";

export default function CertificationsCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className={cn("w-full")}
    >
      <CarouselContent className="-ml-1 gap-x-3">
        {new Array(10).fill(10).map((src, index) => (
          <CarouselItem key={index} className="basis-1/3.5 pl-1">
            <CertificationItem>
              Сертификат на продукт
              <span className="font-semibold">
                {" "}
                “Программа управления инженерными данными”{" "}
              </span>
              от 02.10.2019
            </CertificationItem>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

function CertificationItem({ children }: PropsWithChildren) {
  return (
    <article className="rounded-[40px] bg-white px-[60px] py-[35px]">
      <div className="relative">
        <Image
          src="/images/bg/certification.png"
          width={466}
          height={518}
          alt="Сертификат"
        />
        <p className="absolute right-0 bottom-[12px] left-0 text-center text-[18px] xl:text-[24px] 2xl:text-[32px]">
          {children}
        </p>
      </div>
    </article>
  );
}
