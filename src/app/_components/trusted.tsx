import Container from "@/components/container";
import TrustedBlocks from "@/components/trusted-blocks";
import SectionTitle from "@/components/ui/section-title";

export function Trusted() {
  return (
    <section className="mt-8.5 2xl:mt-19">
      <Container>
        <SectionTitle>Нам доверяют</SectionTitle>

        <TrustedBlocks />

      </Container>
    </section>
  );
}
