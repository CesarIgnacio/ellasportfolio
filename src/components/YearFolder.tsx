"use client";

export const YearFolder = ({ name }: any) => {
  return (
    <button
      className="text-sm font-light mb-1 pl-3 cursor-pointer hover:text-gray-500 focus:text-gray-500"
      onClick={() => console.log("clicked")}
    >
      {name}
    </button>
  );
};
