import Image from "next/image";
import React from "react";
import credit from "@/assets/info/credit.png";
import god_semyi from "@/assets/info/god_semyi.png";
import postupi from "@/assets/info/postupi.png";
import SectionHeading from "@/components/typo/SectionHeading";

const InfoComponent = () => {
  return (
    <section className="flex flex-col gap-2.5 ">
      <SectionHeading heading={"Полезная информация"} />

      <div className="flex flex-wrap flex-row gap-8 justify-center">
        <div className="flex flex-col gap-5">
          <Image src={credit} alt="credit"></Image>
          <Image src={god_semyi} alt="God semiy"></Image>
        </div>
        <div className="flex flex-col">
          <Image src={postupi} alt="postupi onlain"></Image>
        </div>
      </div>
    </section>
  );
};

export default InfoComponent;
