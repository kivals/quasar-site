import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NewsFilterSidebarProps {
  types: string[];
  years: number[];
  onChangeTypes: (v: string) => void;
  onChangeYears: (v: number) => void;
  selectedYear: number;
  selectedType: string;
}

function NewsFilterSidebar({
  types,
  years,
  onChangeYears,
  onChangeTypes,
  selectedType,
  selectedYear,
}: NewsFilterSidebarProps) {
  return (
    <div>
      <FilterPart<string>
        title="Тип"
        list={types}
        onChange={onChangeTypes}
        selectedValue={selectedType}
      />
      <FilterPart<number>
        title="Год"
        list={years}
        onChange={onChangeYears}
        selectedValue={selectedYear}
      />
    </div>
  );
}

interface FilterPartProps<T extends string | number> {
  title: string;
  list: T[];
  onChange: (value: T) => void;
  selectedValue: T;
}

function FilterPart<T extends string | number>({
  title,
  list,
  onChange,
  selectedValue,
}: FilterPartProps<T>) {
  return (
    <div>
      <span className="mb-5 inline-block text-[32px] font-medium">{title}</span>
      <ul className="flex flex-col gap-y-5">
        {list.map((v, index) => (
          <li key={index}>
            <Button
              variant="ghost"
              onClick={() => onChange(v)}
              className={cn(
                "text-accent w-[273px] rounded-[20px] py-8 text-[32px] text-black/50",
                selectedValue === v && "bg-accent text-white",
              )}
            >
              {v}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsFilterSidebar;
