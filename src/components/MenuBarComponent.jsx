import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import SubHeaderItem from "./SubHeaderItem";
import Link from "next/link";

const MenuBarComponent = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <SubHeaderItem>
            <Link href={"/about"}>Универститет</Link>{" "}
          </SubHeaderItem>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Структура института</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Информация об университета</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Внутрення система оценки качества образования
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Электронная информационно-образовательная </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>История университета</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Доска почета</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Лучшие спортсмены</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Наука</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Воспитательная работа</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Воспитательная работа</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Противодействие терроризму и экстремизму</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Часто задаваемые вопросы</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Фотоотчеты</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <SubHeaderItem>
            <Link href={"/abitur"}>Абитуриенту</Link>
          </SubHeaderItem>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <SubHeaderItem>Студентам</SubHeaderItem>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <SubHeaderItem>Сотрудникам</SubHeaderItem>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <SubHeaderItem>Допольнительное образование</SubHeaderItem>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default MenuBarComponent;
