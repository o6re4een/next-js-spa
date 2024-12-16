import React from "react";
import SectionHeading from "./typo/SectionHeading";
import Image from "next/image";

import gerb from "@/assets/partners/gerb.png";
import open from "@/assets/partners/open.png";
import uni from "@/assets/partners/uni.png";
import WsLogo from "@/assets/partners/ws.png";

const Partners = () => {
  return (
    <section className="flex flex-col gap-2.5">
      <SectionHeading heading={"Наши партнеры"} />
      <div className="flex flex-row gap-4 flex-wrap justify-center">
        <Image src={gerb} alt="Gerb" />
        <Image src={open} alt="Open" />
        <Image src={uni} alt="Uni" />
        <Image src={WsLogo} alt="WS" />
      </div>
    </section>
  );
};

export default Partners;
