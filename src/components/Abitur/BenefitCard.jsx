import Image from "next/image";
import React from "react";

const BenefitCard = ({ icon, title }) => {
  return (
    <div className="flex flex-row sm:flex-row sm:max-w-[317px] bg-bg-primary-blue px-1.5 py-2.5 rounded-xl max-w-[150px] w-full items-center max-h-[207px] h-full gap-1.5 justify-center">
      <Image src={icon} alt="BenefitIcon" className="w-8 h-7 sm:w-14 sm:h-12" />
      <p className="text-xs sm:text-xl w-fit">{title}</p>
    </div>
  );
};

export default BenefitCard;
