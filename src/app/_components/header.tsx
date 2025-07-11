import { MenuIcon } from "@/components/icons/menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
  return (
    <header className="mt-7 xl:mt-8 px-3.5 xl:px-13.5">
      <div className="px-10 py-3 xl:py-5 flex items-center justify-between xl:justify-start">
        <Image
          src="/images/logo.png"
          alt="Quasar logo"
          height={50}
          width={50}
          className="size-[30px] xl:size-[50px] invert"
        />

        <h1 className="text-[27px] xl:text-[52px] xl:ml-2.5">Quasar</h1>

        <MenuIcon className="size-6 xl:hidden" />

        <div className="hidden xl:flex mx-auto items-center gap-7 text-[24px]">
          <span>Компания</span>
          <span>Продукты</span>
          <span>Услуги</span>
          <span>Партнеры</span>
          <span>Новости</span>
          <span>Контакты</span>
          <span>Карьера</span>
        </div>

        <Button className="hidden xl:inline-flex font-semibold text-2xl ml-auto">
          Обратная связь
        </Button>
      </div>
    </header>
  );
}
