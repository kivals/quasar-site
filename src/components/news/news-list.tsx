import { Search } from "lucide-react";
import { PropsWithChildren } from "react";
import { newsData } from "@/data/news";

interface NewsListProps {
  news: typeof newsData;
}

function NewsList({ news }: NewsListProps) {
  return (
    <div className="flex flex-col gap-y-5">
      {!news.length ? (
        <p>Новостей по выбранным фильтрам нет</p>
      ) : (
        news.map(({ date, content: { title, text } }, index) => (
          <NewsItem key={index} title={title} date={date} text={text} />
        ))
      )}
    </div>
  );
}

interface NewsItemProps {
  title: string;
  text: string;
  date: string;
}

function NewsItem({ title, text, date }: NewsItemProps) {
  return (
    <div className="rounded-[30px] bg-white p-9">
      <div className="mb-2.5 flex items-center justify-between text-[40px] font-medium">
        <p>{title}</p>
        <span className="text-black/50">{date}</span>
      </div>
      <div className="mb-2.5 text-[32px] font-light">{text}</div>
      <div className="flex justify-end">
        <SearchButton>Читать</SearchButton>
      </div>
    </div>
  );
}

function SearchButton({ children }: PropsWithChildren) {
  return (
    <button className="flex items-center gap-x-2 text-[32px] font-semibold text-gray-500 transition-colors hover:text-black">
      <Search size={35} className="mr-2" />
      {children}
    </button>
  );
}

export default NewsList;
