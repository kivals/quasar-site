import SectionTitle from "@/components/section-title";
import {Button} from "@/components/ui/button";
import Container from "@/components/container";

export default function CareerSection() {
  return (
    <section>
        <SectionTitle>Карьера</SectionTitle>
        <div className="bg-[url('/images/bg/career-bg.jpg')] bg-no-repeat py-[88px]">
          <Container>
            <p className="mb-10 text-center text-[60px] font-semibold text-white">
              Мы гордимся каждым сотрудником и делаем всё, чтобы работа приносила
              удовольствие
            </p>
            <Button
              className="mx-auto bg-accent cursor-pointer rounded-[15px] py-8 font-semibold text-white lg:flex lg:text-lg xl:text-xl">
              Ознакомиться с вакансиями
            </Button>
          </Container>
        </div>
    </section>
  );
}
