export const MenuOption = ({ name }: any) => {
  return (
    <button className="text-sm font-light my-2 cursor-pointer hover:text-gray-500 focus:text-gray-500">
      {name}
    </button>
  );
};
