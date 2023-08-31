import { MenuOption } from "./MenuOption";
import { YearFolder } from "./YearFolder";

export default function Sidebar() {
  return (
    <div className="w-72 bg-white flex flex-col p-14 items-start">
      <button className="text-2xl font-bold cursor-pointer">Ella Hepner</button>
      <button className="text-base my-6 cursor-pointer">Home</button>
      <MenuOption name="Paintings" />
      <YearFolder name="2023" />
      <YearFolder name="2022" />
      <MenuOption name="Prints" />
      <MenuOption name="Installations" />
      <MenuOption name="CV" />
      <MenuOption name="Contact" />
    </div>
  );
}
