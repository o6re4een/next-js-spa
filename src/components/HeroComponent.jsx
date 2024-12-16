import Image from "next/image";
import React from "react";

import HeroImage from "@/assets/HeroImage.jpeg";
import ArrowRight from "@/assets/ArrowRight.svg";
import ArrowLeft from "@/assets/ArrowLeft.svg";

const HeroComponent = () => {
  return (
    <section className="rounded-t-[40px]">
      <div className="relative">
        <Image src={HeroImage} className="w-full h-auto" alt="hero"></Image>
        <div className="absolute bottom-4 left-5 flex flex-row gap-3">
          <Image src={ArrowLeft} alt="Arrow" className="h-full w-full"></Image>
          <Image src={ArrowRight} alt="Arrow" className="h-full w-full"></Image>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center text-white text-2xl py-1 bg-bg-primary-blue rounded-b-[40px]">
        Продолжает работу литературный клуб СГФ.
      </div>
    </section>
  );
};

export default HeroComponent;
