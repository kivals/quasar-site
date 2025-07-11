import Image from "next/image";

function TrustedItem() {
  return (
    <div className="bg-white relative rounded-[20px] xl:size-[250px] overflow-clip">
      <Image
        src="/images/minstroy.png"
        alt="MinStroy logo"
        fill
        className="object-contain grayscale opacity-50"
      />
    </div>
  );
}

function TrustedBlock() {
  return (
    <div className="grid xl:flex grid-rows-2 grid-cols-2 max-xl:w-[calc(100vw-2rem)] aspect-square gap-2.5 xl:gap-10">
      <TrustedItem />
      <TrustedItem />
      <TrustedItem />
      <TrustedItem />
    </div>
  );
}

export function Trusted() {
  return (
    <div className="mt-8.5 xl:mt-19">
      <h2 className="font-medium text-[28px] xl:text-[80px] text-center">
        Нам доверяют
      </h2>

      <div className="overflow-x-scroll scrollbar-none mt-5 xl:mt-7.5 max-xl:px-4 xl:mx-21.5">
        <div className="flex w-max items-center gap-4 xl:gap-10">
          <TrustedBlock />
          <TrustedBlock />
          <TrustedBlock />
        </div>
      </div>
    </div>
  );
}
