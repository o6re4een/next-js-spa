import MenuBarComponent from "./MenuBarComponent";
import SubHeaderItem from "./SubHeaderItem";

export default function SubHeader() {
  return (
    <div className="container mx-auto flex flex-row flex-wrap justify-center py-1.5 gap-14">
      <div className="hidden md:flex">
        <MenuBarComponent></MenuBarComponent>
      </div>

      {/* <SubHeaderItem>Абитуриенту</SubHeaderItem> */}
    </div>
  );
}
