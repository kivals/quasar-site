import Container from "@/components/container";
import TrustedBlocks from "@/components/trusted-blocks";

export function Trusted() {
  return (
    <section className="mt-8.5 2xl:mt-19">
      <Container>
        <h2 className="text-center text-[28px] font-medium lg:mb-4 lg:text-[40px] xl:mb-6 xl:text-[60px] 2xl:mb-8 2xl:text-[80px]">
          Нам доверяют
        </h2>

        <TrustedBlocks />

      </Container>
    </section>
  );
}
