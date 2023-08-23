import React from "react";
import { PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="flex items-center justify-center absolute w-full top-0 left-0 border-b border-grayish h-[10vh] bg-sand">
      <h1 className=" text-bluish text-5xl p-4 font-semibold w-full">Notes</h1>
      <button title="Add Notes" className="absolute top-4 right-20">
        <PlusIcon className="text-bluish w-10 h-10 hover:bg-bluish hover:text-sand rounded-full p-1" />
      </button>
      <button title="Search" className="absolute top-4 right-4">
        <MagnifyingGlassIcon className="text-bluish w-10 h-10 hover:bg-bluish hover:text-sand rounded-full p-1" />
      </button>
    </div>
  );
};

export default Header;
