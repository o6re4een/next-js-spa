import Logo from "@/assets/Logo.svg";
import Image from "next/image";
import MenuIcon from "@/assets/MenuIcon.svg";
import Link from "next/link";
import { SidebarTrigger } from "./ui/sidebar";
export default function HeaderComponent() {
  return (
    <section
      id="header"
      className="flex flex-row bg-bg-primary-blue text-white"
    >
      <div className="container mx-auto flex flex-row justify-between px-4 sm:px-0 sm:justify-center items-center gap-14 text-base font-normal py-1.5">
        <Link className="flex flex-row items-center gap-1" href={"/"}>
          <Image
            src={Logo}
            alt="Logo"
            className="w-[46px] h-[40px] sm:w-[28px] sm:h-[28px]"
          />
          <p className="text-xs font-normal hidden sm:flex">
            Нижнетагильский государственный <br /> социально-педагогический
            институт
          </p>
        </Link>
        <div className="hidden sm:flex flex-row justify-center items-center gap-14">
          <p>Контакты</p>
          <p>Виртуальный тур</p>
          <p>Медиа</p>
          <p>Книга почета</p>
        </div>
        <div className="flex sm:hidden">
          <SidebarTrigger />
        </div>
      </div>
    </section>
  );
}
