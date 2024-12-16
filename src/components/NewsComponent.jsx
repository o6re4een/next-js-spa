import React from "react";
import NewsCard from "./NewsCard";
import { data } from "@/consts/data";

const NewsComponent = () => {
  const news = data.news.map((item, index) => {
    return <NewsCard key={index + item.heading} props={item} />;
  });

  return (
    <section className="flex flex-col gap-2.5">
      <div className="flex flex-row justify-between">
        <h1 className="text-base sm:text-4xl">Новости</h1>
        <h1 className="text-base sm:text-4xl">Все новости</h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center sm:justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-7 w-full">
        {news}
        {/* <NewsCard
          props={{
            date: "25.11.2024",
            image: "https://picsum.photos/200/300",
            heading: "Городской круглый стол",
            text: "lorem ",
          }}
        ></NewsCard> */}
      </div>
    </section>
  );
};

export default NewsComponent;
