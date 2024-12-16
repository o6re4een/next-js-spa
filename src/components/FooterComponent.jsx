import React from "react";

const FooterComponent = () => {
  return (
    <section className="flex flex-row bg-bg-primary-blue text-white mt-5">
      <div className="flex flex-col  sm:flex-row items-center justify-between container mx-auto flex-wrap gap-2 text-center sm:text-start">
        <p className="text-lg max-w-[254px]">
          © 2005-2023 - Нижнетагильский государственный социально-педагогический
          институт
        </p>
        <p className="max-w-[237px]">
          Контакты 622031, Свердловская обл. Нижний Тагил ул. Красногвардейская,
          57 тел. общего отдела (3435) 25-48-00 e-mail: office@ntspi.ru тел.
          приемной комиссии (3435) 25-55-10
        </p>
      </div>
    </section>
  );
};

export default FooterComponent;
