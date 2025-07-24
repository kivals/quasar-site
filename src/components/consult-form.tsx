import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ConsultForm() {
  return (
    <form action="">
      <div className="flex flex-col gap-y-5">
        <Input
          className="h-[80px] rounded-[20px] rounded-bl-[0px] border-[1.5px] border-[#354389] text-[32px] font-normal placeholder:text-[32px]"
          type="text"
          placeholder="Имя"
        />
        <Input
          className="h-[80px] rounded-[20px] rounded-bl-[0px] border-[1.5px] border-[#354389] text-[32px] font-normal placeholder:text-[32px]"
          type="tel"
          placeholder="Телефон"
        />
        <Input
          className="h-[80px] rounded-[20px] rounded-bl-[0px] border-[1.5px] border-[#354389] text-[32px] font-normal placeholder:text-[32px]"
          type="email"
          placeholder="Email"
        />
        <Textarea
          className="h-[210px] rounded-[20px] rounded-bl-[0px] border-[1.5px] border-[#354389] text-[32px] font-normal placeholder:text-[32px]"
          placeholder="Сообщение"
        />
        <div className="flex items-center gap-3">
          <Checkbox className="h-[30px] w-[30px]" id="terms" />
          <Label className="text-[28px] font-normal" htmlFor="terms">
            Согласен с{" "}
            <a className="cursor-pointer underline" href="/docs/PD.pdf" target="_blank">
              Политикой конфиденциальности
            </a>
          </Label>
        </div>

        <Button
          disabled={true}
          className="bg-accent h-[85px] cursor-pointer rounded-[20px] py-6 font-semibold text-white lg:flex lg:text-lg xl:text-xl 2xl:text-[32px]"
        >
          Отправить
        </Button>
      </div>
    </form>
  );
}
