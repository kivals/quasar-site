import { PropsWithChildren } from "react";
import { ServicesBackground } from "./services-background";

function ServiceItem({ children }: PropsWithChildren) {
  return (
    <div className="max-xl:text-center rounded-[30px] bg-white/80 backdrop-blur-3xl px-3 xl:px-11 py-4 xl:py-15 flex flex-col max-xl:items-center justify-center xl:justify-end">
      <p className="text-[24px] xl:text-[40px]">{children}</p>
      <a className="text-[24px] xl:text-[32px] font-semibold text-accent mt-2.5">
        Подробнее
      </a>
    </div>
  );
}

export function Services() {
  return (
    <div className="mt-8.5 xl:mt-30 xl:mx-21.5 relative">
      <h2 className="font-medium text-[28px] xl:text-[80px] text-center">
        Услуги
      </h2>

      <div className="grid grid-rows-2 xl:grid-rows-[auto_auto] mt-5 gap-2.5 xl:gap-7.5 max-xl:mx-5 xl:drop-shadow-[0_0_50px_#00000020]">
        <div className="grid grid-rows-2 gap-2.5 xl:gap-7.5 xl:grid-rows-1 xl:grid-cols-2 xl:pr-26">
          <ServiceItem>
            Разработка ИТ-систем: проектирование, разработка и внедрение
            программного обеспечения под задачи бизнеса
          </ServiceItem>
          <ServiceItem>Сопровождение информационных систем</ServiceItem>
        </div>

        <div className="grid grid-rows-2 gap-2.5 xl:gap-7.5 xl:grid-rows-1 xl:grid-cols-2 xl:pl-26">
          <ServiceItem>Разработка встраиваемых систем</ServiceItem>
          <ServiceItem>Разработка сайтов</ServiceItem>
        </div>
      </div>

      <div className="absolute xl:hidden inset-0 -z-10 overflow-clip">
        <div className="absolute -left-80 -top-62">
          <ServicesBackground />
        </div>
      </div>
    </div>
  );
}
