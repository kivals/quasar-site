import Container from "@/components/container";
import TrustedBlocks from "@/components/trusted-blocks";

export function Trusted() {
  return (
    <Container>
      <div className="mt-8.5 xl:mt-19">
        <h2 className="text-center text-[28px] mb-5 font-medium lg:text-[40px] xl:text-[80px]">
          Нам доверяют
        </h2>

          <TrustedBlocks />
        {/*<div className="overflow-x-scroll scrollbar-none mt-5 xl:mt-7.5 max-xl:px-4 xl:mx-21.5">
        <div className="flex w-max items-center gap-4 xl:gap-10">
          <TrustedBlock />
        </div>
      </div>*/}
      </div>
    </Container>

  );
}
