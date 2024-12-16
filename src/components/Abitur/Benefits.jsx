import React from "react";
import { data } from "@/consts/data";
import BenefitCard from "./BenefitCard";
const Benefits = () => {
  const cards = data.benefits.map((item) => {
    return (
      <BenefitCard
        icon={item.icon}
        title={item.title}
        key={item.title}
      ></BenefitCard>
    );
  });

  return (
    <section className="text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-20 ">
      {cards}
    </section>
  );
};

export default Benefits;
