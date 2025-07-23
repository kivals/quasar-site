import Container from "@/components/container";
import Image from "next/image";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export default function ContactsSection() {
  return (
    <section>
      <Container>
        <div className="flex bg-[url('/images/bg/contacts-bg2.png')] bg-right bg-no-repeat">
          <div className="w-[50%] bg-[#494F58] px-16 py-12">
            <div className="mb-5 flex gap-x-8">
              <Image
                src="/images/logo.png"
                alt="Quasar logo"
                height={140}
                width={140}
                className="size-[30px] lg:size-[40px] xl:size-[140px]"
              />
              <div className="flex flex-col items-center text-white">
                <h1 className="text-[27px] xl:text-[42px] 2xl:text-[80px]">
                  Quasar
                </h1>
                <span className="text-[30px]">IT-компания</span>
              </div>
            </div>
            <ContactCard className="mb-5 flex flex-col gap-y-5 text-[24px] text-white">
              <span>Реквизиты компании</span>
              <span>
                Общество с ограниченной ответственностью «КВАЗАР»: ИНН
                7716913371 ОГРН 1187746525108 КПП 770501001 р/с
                40702810801500052303 "ООО «Банк Точка»" БИК 044525104 к/с
                30101810745374525104
              </span>
            </ContactCard>
            <ContactCard className="mb-5 text-[24px] text-white">
              Москва, Муниципальный округ Таганский, вн. тер. г., Москворецкая
              наб., д. 9, стр. 2, помещ. IV, ком. 1, Москва, 109240
            </ContactCard>
            <ContactCard className="mb-5 text-[24px] text-white">
              Основной вид деятельности: 62.01 Разработка компьютерного
              программного обеспечения. ОКВЭД Информационные технологии: 26.20;
              33.20; 43.22; 43.21; 61.10; 62.02; 62.09; 63.11; 63.11.1; 71.20.
            </ContactCard>
            <div className="flex gap-x-5">
              <ContactCard className="mb-5 flex flex-col gap-y-1 text-[20px] text-white">
                <span className="font-semibold">Контактный телефон:</span>
                <a href="tel:89852294724">+7 (985) 229-47-24</a>
              </ContactCard>
              <ContactCard className="mb-5 flex flex-col gap-y-1 text-[20px] text-white">
                <span className="font-semibold">
                  По вопросам трудоустройства:
                </span>
                <a href="mailto:hr@quasarpro.ru">hr@quasarpro.ru</a>
              </ContactCard>
            </div>
          </div>
        </div>
      </Container>
      {/*<div className="relative w-full overflow-hidden">
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=37.639177%2C55.748493&z=16.93"
          width="560"
          height="560"
          allowFullScreen={true}
          className="pointer-events-none relative w-full"
        ></iframe>
      </div>*/}
    </section>
  );
}

function ContactCard({
  children,
  className,
}: { className?: string } & PropsWithChildren) {
  return (
    <div className={cn("rounded-[30px] bg-white/20 p-10", className)}>
      {children}
    </div>
  );
}
