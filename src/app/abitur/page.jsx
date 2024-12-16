import React from "react";
import Benefits from "@/components/Abitur/Benefits";
import { MenubarSeparator } from "@radix-ui/react-menubar";
import Partners from "@/components/Partners";
const AbiturPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="container mx-auto flex flex-col items-center gap-2.5 px-4 sm:px-0">
        <p className="text-xl text-white px-4 md:px-[150px] py-4 md:py-20 bg-[#00A2BF] rounded-xl">
          Уважаемые абитуриенты! Информация об образовательных программах,
          количестве мест для приема на 2025/2026 учебный год будет опубликована
          до 20 января 2025 года.
        </p>
        <Benefits></Benefits>
        <div className="flex-col sm:flex-row text hidden sm:flex text-xl justify-between gap-0 sm:gap-14 text-white">
          <p className="bg-bg-card-bg px-4 py-2 sm:px-8 sm:py-1 rounded-xl max-w-[500px]">
            Адрес: 622031, Свердловская область, г. Нижний Тагил, ул.
            Красногвардейская, д. 57, каб. 110а График работы приемной комиссии:
            Понедельник - Пятница с 08.30 до 17.00 Суббота, Воскресение:
            выходной
          </p>
          <p className="bg-bg-card-bg px-4 py-2 sm:px-8 sm:py-1 rounded-xl max-w-[500px] ">
            Номера телефонов для консультирования поступающих из Белгородской
            области и участников специальной военной операции на территориях
            Украины, Донецкой Народной Республики, Луганской Народной
            Республики, Запорожской области и Херсонской области и их детей:-
            ответственный секретарь приемной комиссии филиала Сизоненко
            Екатерина Владимировна: 8(3435) 25-55-10; - телефона горячей линии
            ФГБУ «Интеробразование»: 8 (800) 301-44-55.
          </p>
        </div>
      </div>
      <div className="flex-col sm:flex-row text flex sm:hidden text-xl justify-between gap-0 sm:gap-14 text-white">
        <p className="bg-bg-card-bg px-4 py-2 sm:px-8 sm:py-1 rounded-t-xl max-w-[500px]">
          Адрес: 622031, Свердловская область, г. Нижний Тагил, ул.
          Красногвардейская, д. 57, каб. 110а График работы приемной комиссии:
          Понедельник - Пятница с 08.30 до 17.00 Суббота, Воскресение: выходной
        </p>
        <hr className="w-full h-1 bg-bg-primary-blue" />
        <p className="bg-bg-card-bg px-4 py-2 sm:px-8 sm:py-1 rounded-b-xl max-w-[500px]">
          Номера телефонов для консультирования поступающих из Белгородской
          области и участников специальной военной операции на территориях
          Украины, Донецкой Народной Республики, Луганской Народной Республики,
          Запорожской области и Херсонской области и их детей:- ответственный
          секретарь приемной комиссии филиала Сизоненко Екатерина Владимировна:
          8(3435) 25-55-10; - телефона горячей линии ФГБУ «Интеробразование»: 8
          (800) 301-44-55.
        </p>
      </div>
      <Partners></Partners>
    </div>
  );
};

export default AbiturPage;
