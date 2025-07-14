import { PropsWithChildren } from "react";
import { ServicesBackground } from "./services-background";

function ServiceItem({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col justify-center rounded-[30px] bg-white/80 px-3 py-4 backdrop-blur-3xl max-xl:items-center max-xl:text-center xl:justify-end xl:px-11 xl:py-15">
      <p className="text-[24px] xl:text-[40px]">{children}</p>
      <a className="text-accent mt-2.5 text-[24px] font-semibold xl:text-[32px]">
        Подробнее
      </a>
    </div>
  );
}

export function Services() {
  return (
    <div className="relative mt-8.5 xl:mx-21.5 xl:mt-30">
      <h2 className="text-center text-[28px] font-medium xl:text-[80px]">
        Услуги
      </h2>

      <div className="mt-5 grid grid-rows-2 gap-2.5 max-xl:mx-5 xl:grid-rows-[auto_auto] xl:gap-7.5 xl:drop-shadow-[0_0_50px_#00000020]">
        <div className="grid grid-rows-2 gap-2.5 xl:grid-cols-2 xl:grid-rows-1 xl:gap-7.5 xl:pr-26">
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
  );
}
