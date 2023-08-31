import { YearFolder } from "./YearFolder";

export const MenuOption = ({ name }: any) => {
  return (
    <>
      <div className="flex items-start justify-start">
        <div className="mx-auto mt-2 space-y-1  lg:max-w-md">
          <details className="rounded-lg">
            <summary className="list-none text-sm font-light bg-white my-2 cursor-pointer">
              {name}
            </summary>
            <div className="bg-white">
              <YearFolder name="2023" />
            </div>
          </details>
        </div>
      </div>

      {/* <button className="text-sm font-light my-2 cursor-pointer text-black hover:text-gray-500 focus:text-gray-500">
        {name}
      </button> */}
    </>
  );
};
