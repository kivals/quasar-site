import { Button } from "@/components/ui/button";
import Image from "next/image";
import Container from "@/components/container";
import BurgerMenu from "@/components/burger-menu";

const menuItems = [
  "Компания",
  "Продукты",
  "Услуги",
  "Партнеры",
  "Новости",
  "Контакты",
  "Карьера",
];

export function Header() {
  return (
    <header className="mt-7 px-3.5 xl:mt-8 xl:px-13.5">
      <Container>
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex w-full shrink-0 items-center justify-between gap-1 lg:w-auto">
            <Image
              src="/images/logo.png"
              alt="Quasar logo"
              height={50}
              width={50}
              className="size-[30px] invert lg:size-[40px] xl:size-[50px]"
            />

            <h1 className="text-[27px] xl:text-[42px] 2xl:text-[52px]">
              Quasar
            </h1>
            <BurgerMenu />
          </div>

          <ul className="hidden flex-wrap items-center gap-y-2 lg:flex lg:gap-x-3 lg:text-[18px] xl:gap-x-4 xl:text-[20px] 2xl:gap-x-6 2xl:text-[24px]">
            {menuItems.map((menuItem) => (
              <li key={menuItem}>
                <a href="#">{menuItem}</a>
              </li>
            ))}
          </ul>

          <Button className="bg-accent hidden cursor-pointer rounded-[20px] py-6 font-semibold text-white lg:flex lg:text-lg xl:text-xl">
            Обратная связь
          </Button>
        </div>
      </Container>
    </header>
  );
}
