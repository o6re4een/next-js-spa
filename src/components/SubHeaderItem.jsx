import Image from "next/image";
import React from "react";
import ArrowDown from "@/assets/IconDown.svg";
function SubHeaderItem({ children }) {
  return (
    <div className="flex flex-row text-base font-normal items-center">
      <p className="cursor-pointer">{children}</p>

      <Image
        alt="arrow"
        src={ArrowDown}
        className="p-[2.5px]  cursor-pointer"
      />
    </div>
  );
}

export default SubHeaderItem;
