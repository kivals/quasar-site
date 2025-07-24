import { Globe } from "@/components/globe";
import Image from "next/image";
import { PropsWithChildren } from "react";
import Container from "@/components/container";

function PointTitle({ children }: PropsWithChildren) {
  return <p className="text-[42px] font-medium xl:text-[60px] 2xl:text-[84px]">{children}</p>;
}

function PointText({ children }: PropsWithChildren) {
  return <p className="text-[24px] xl:text-[32px] 2xl:text-[42px]">{children}</p>;
}

export function Title() {
  return (
    <Container>
      <div className="mt-10">
        <h2 className="px-3.5 text-center text-[28px] font-medium lg:text-[40px] xl:text-[60px] 2xl:text-[80px]">
          Системный подход к разработке программного обеспечения
        </h2>

        <div className="relative w-full overflow-x-clip xl:-mt-24">
          {/* TODO Globe подвешивает браузер */}
          <Globe className="-ml-[20%] w-[140%] xl:mx-auto xl:max-w-[1100px]" />
        </div>

        <div className="mt-55 flex flex-col gap-x-3 rounded-[40px] bg-white pt-5 pb-8.5 drop-shadow-[0_0_50px_#34538980] lg:flex-row xl:mt-110 xl:flex xl:p-20">
          <div className="flex-1">
            <div className="grid w-max grid-cols-[auto_auto] items-center gap-x-7.5 max-xl:mx-auto max-xl:justify-items-center max-xl:px-13 xl:gap-x-2.5">
              <Image
                src="/images/logo.png"
                alt="Quasar logo"
                height={66}
                width={66}
                className="invert max-xl:row-span-2 max-xl:size-[60px]"
              />

              <h2 className="text-[32px] xl:text-[40px] 2xl:text-[60px]">Quasar</h2>
              <span className="text-lg xl:col-span-2 xl:row-start-1 xl:text-[24px] 2xl:text-[30px]">
                IT-компания
              </span>
            </div>

            <div className="font-jura mt-5 text-[22px] font-medium max-xl:px-2 max-xl:text-center lg:max-w-[476px] xl:text-[24px] 2xl:text-[28px]">
              <p>
                Разработка и создание технологий для нужд органов
                государственной власти, бизнес-структур и частных лиц.
              </p>
              <p className="mt-5">
                Компания внедряет и развивает информационные системы на основе
                собственных технологических решений и решений своих партнеров.
              </p>
            </div>
          </div>

          <div className="flex-1 grid-cols-2 grid-rows-[auto_auto] gap-10 max-xl:mt-5 max-xl:text-center xl:grid">
            <div>
              <PointTitle>&gt;7</PointTitle>
              <PointText>лет на рынке</PointText>
            </div>

            <div className="max-xl:mt-5 max-xl:px-15">
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
    </Container>
  );
}
