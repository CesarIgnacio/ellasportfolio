import { MenuOption } from "./MenuOption";
import { YearFolder } from "./YearFolder";

export default function Sidebar() {
  return (
    <div className="w-72 bg-white flex flex-col p-14 items-start h-screen">
      <button className="text-2xl font-bold cursor-pointer">Ella Hepner</button>
      <button className="text-base my-6 cursor-pointer">Home</button>
      <MenuOption name="Drawings" />
      <MenuOption name="Paintings" />
      <MenuOption name="Prints" />
      <MenuOption name="Installations" />
      <button className="text-sm font-light my-2 cursor-pointer text-black hover:text-gray-500 focus:text-gray-500">
        CV
      </button>
      <button className="text-sm font-light my-2 cursor-pointer text-black hover:text-gray-500 focus:text-gray-500">
        Contact
      </button>
    </div>
  );
}
