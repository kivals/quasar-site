import { PropsWithChildren } from "react";
import { ServicesBackground } from "./services-background";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";

function ServiceItem({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col rounded-[30px] bg-white/80 px-3 py-4 backdrop-blur-3xl max-xl:items-center max-xl:text-center xl:justify-end xl:px-8 xl:py-10 2xl:px-11 2xl:py-15">
      <p className="text-[24px] xl:text-[32px] 2xl:text-[40px]">{children}</p>
      <Button
        variant="link"
        className="text-accent mt-5 cursor-pointer justify-start pl-0 font-semibold md:text-[20px] lg:text-[24px] xl:text-[32px]"
      >
        Подробнее
      </Button>
    </div>
  );
}

export function Services() {
  return (
    <Container>
      <div className="relative mt-8.5 xl:mt-30">
        <h2 className="text-center text-[28px] font-medium xl:text-[40px] 2xl:text-[80px]">
          Услуги
        </h2>

        <div className="mt-5 grid grid-rows-2 gap-2.5 max-xl:mx-5 xl:grid-rows-[auto_auto] xl:gap-7.5 xl:drop-shadow-[0_0_50px_#00000020]">
          <div className="grid grid-rows-2 gap-2.5 xl:grid-cols-2 xl:grid-rows-1 xl:gap-5 2xl:gap-7.5 xl:pr-26">
            <ServiceItem>
              Разработка ИТ-систем: проектирование, разработка и внедрение
              программного обеспечения под задачи бизнеса
            </ServiceItem>
            <ServiceItem>Сопровождение информационных систем</ServiceItem>
          </div>

          <div className="grid grid-rows-2 gap-2.5 xl:grid-cols-2 xl:grid-rows-1 xl:gap-7.5 xl:pl-26">
            <ServiceItem>Разработка встраиваемых систем</ServiceItem>
            <ServiceItem>Разработка сайтов</ServiceItem>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 overflow-clip xl:hidden">
          <div className="absolute -top-62 -left-80">
            <ServicesBackground />
          </div>
        </div>
      </div>
    </Container>
  );
}
