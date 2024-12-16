import Image from "next/image";
import React from "react";

const NewsCard = ({ props }) => {
  //   console.log(props);
  return (
    <div className="flex flex-col items-start gap-[5px] bg-bg-card-bg rounded-[10px] max-w-[350px] w-full px-1 text-white">
      <h1 className="text-3xl text-start">{props.date}</h1>

      <div className="flex flex-col items-center gap-[5px] justify-start">
        <Image
          src={props.image}
          alt="NewsImage"
          className="bg-cover "
          //   width={330}
          //   height={167}
        ></Image>
        <p className="text-xl text-center">{props.heading}</p>
        <p className="text-sm text-start">{props.text}</p>
      </div>
    </div>
  );
};

export default NewsCard;
