import Container from "@/components/container";
import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";

export function Products() {
  return (
    <section className="mt-8.5 xl:mt-19">
      <Container>
        <h3 className="mb-5 text-center text-[80px] font-medium">Продукты</h3>
        <div className="flex flex-col gap-y-8">
          <ProductItem
            title="ЦПСО"
            description="Цифровая платформа сервисного обслуживания (ЦПСО) –
              автоматизированная система (ГОСТ 34.003-90), состоящая из
              комплекса средств автоматизации и участников (пользователей),
              реализующая информационную технологию эксплуатации и ремонта
              изделий, позволяющая пользователям рационально и полноценно
              эксплуатировать приобретенное/внедренное/разработанное под заказ
              изделие (особенно технически сложное) или услугу."
            bg="/images/bg/bg1.png"
          />
          <ProductItem
            title="СОКОЛ"
            description="Платформа видеоаналитики для контроля за правильностью действий персонала -система компьютерного зрения Сокол позволяет организовать интеллектуальное наблюдение, основанное на технологии искусственного интеллекта, позволяющее в режиме реального времени осуществлять анализ и контроль за поведением объекта."
            bg="/images/bg/bg2.png"
          />
          <ProductItem
            title="Единая платформа дистанционного контроля здоровья"
            description="Единая платформа дистанционного контроля здоровья - модульная платформа, предназначенная для организации единой среды по сбору медицинских данных из различных источников информации (МИС, ЛИС, периферийное и лабораторное оборудование, носимые устройства) и формированию объективной картины по состоянию здоровья пациента."
            bg="/images/bg/bg2.png"
          />
        </div>
      </Container>
    </section>
  );
}

function ProductItem({
  title,
  description,
  bg,
}: {
  title: string;
  description: string;
  bg: string;
}) {
  return (
    <article
      className="h-[190px] flex justify-center items-center md:block md:h-auto rounded-[30px] bg-cover bg-center bg-no-repeat md:pr-[20px] md:pb-[50px] md:pl-[40px] lg:pr-[30px] lg:pb-[100px] lg:pl-[60px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h4 className="mb-4 md:pt-[20%] font-semibold md:text-[50px] lg:text-[60px]">
        {title}
      </h4>
      <p className="hidden text-left text-[28px] md:block md:text-[24px] lg:text-[34px]">
        {description}
      </p>
      <Button
        variant="link"
        className="hidden md:block text-accent mt-5 cursor-pointer pl-0 font-semibold md:text-[20px] lg:text-[24px] xl:text-[32px]"
      >
        Подробнее
      </Button>
    </article>
  );
}
