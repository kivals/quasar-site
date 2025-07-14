import { MenuIcon } from "@/components/icons/menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Container from "@/components/container";

export function Header() {
  return (
    <header className="mt-7 px-3.5 xl:mt-8 xl:px-13.5">
      <Container>
        <div className="flex items-center justify-between gap-x-4">
          <div className="w-full lg:w-auto flex items-center justify-between gap-1 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Quasar logo"
              height={50}
              width={50}
              className="size-[30px] lg:size-[40px] xl:size-[50px] invert"
            />

            <h1 className="text-[27px] xl:text-[52px]">Quasar</h1>
            <MenuIcon className="size-6 lg:hidden" />
          </div>


          <div className="hidden items-center gap-x-5 gap-y-2 xl:text-[24px] lg:text-[18px] lg:flex flex-wrap">
            <span>Компания</span>
            <span>Продукты</span>
            <span>Услуги</span>
            <span>Партнеры</span>
            <span>Новости</span>
            <span>Контакты</span>
            <span>Карьера</span>
          </div>

          <Button className="hidden lg:text-lg xl:text-xl font-semibold lg:flex">
            Обратная связь
          </Button>
        </div>
      </Container>
    </header>
  );
}
