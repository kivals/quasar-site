import { Globe } from "@/components/globe";
import Image from "next/image";
import { PropsWithChildren } from "react";

function PointTitle({ children }: PropsWithChildren) {
  return <p className="font-medium text-[42px] xl:text-[84px]">{children}</p>;
}

function PointText({ children }: PropsWithChildren) {
  return <p className="text-[28px] xl:text-[42px]">{children}</p>;
}

export function Title() {
  return (
    <div className="mt-10">
      <h2 className="px-3.5 text-center font-medium text-[28px] xl:text-[80px]">
        Системный подход к разработке программного обеспечения
      </h2>

      <div className="relative overflow-x-clip w-full xl:-mt-24">
        <Globe className="w-[140%] xl:max-w-[1100px] -ml-[20%] xl:mx-auto" />
      </div>

      <div className="bg-white drop-shadow-[0_0_50px_#34538980] rounded-[40px] mt-55 xl:mt-110 pt-5 pb-8.5 xl:p-20 xl:mx-21.5 xl:flex">
        <div className="flex-1">
          <div className="grid grid-cols-[auto_auto] max-xl:mx-auto gap-x-7.5 xl:gap-x-2.5 w-max max-xl:px-13 items-center max-xl:justify-items-center">
            <Image
              src="/images/logo.png"
              alt="Quasar logo"
              height={66}
              width={66}
              className="max-xl:row-span-2 max-xl:size-[60px] invert"
            />

            <h2 className="text-[32px] xl:text-[60px]">Quasar</h2>
            <span className="text-lg xl:text-[30px] xl:col-span-2 xl:row-start-1">
              IT-компания
            </span>
          </div>

          <div className="text-[22px] xl:text-[28px] max-w-[476px] font-medium font-jura max-xl:text-center max-xl:px-2 mt-5">
            <p>
              Разработка и создание технологий для нужд органов государственной
              власти, бизнес-структур и частных лиц.
            </p>
            <p className="mt-5">
              Компания внедряет и развивает информационные системы на основе
              собственных технологических решений и решений своих партнеров.
            </p>
          </div>
        </div>

        <div className="flex-1 max-xl:text-center max-xl:mt-5 xl:grid grid-cols-2 grid-rows-[auto_auto] gap-10">
          <div>
            <PointTitle>&gt;7</PointTitle>
            <PointText>лет на рынке</PointText>
          </div>

          <div className="max-xl:px-15 max-xl:mt-5">
            <PointTitle>&gt;120</PointTitle>
            <PointText>успешно реализованных проектов</PointText>
          </div>

          <div className="max-xl:mt-5">
            <PointTitle>&gt;30</PointTitle>
            <PointText>довольных Заказчиков</PointText>
          </div>

          <div className="max-xl:mt-5">
            <PointTitle>№1</PointTitle>
            <PointText>среди Ваших исполнителей</PointText>
          </div>
        </div>
      </div>
    </div>
  );
}
