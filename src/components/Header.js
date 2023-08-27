import React from "react";
import { PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = ({ search, setSearch }) => {
  const handleSearch = () => {
    const searchButton = document.getElementById("searchButton");
    const searchField = document.getElementById("searchField");
    const addButton = document.getElementById("addButton");
    if (searchField.style.display == "block") {
      searchField.style.display = "none";
      searchButton.style.borderRadius = "9999px";
      addButton.style.right = "80px";
    } else {
      searchField.style.display = "block";
      searchButton.style.borderRadius = "6px";
      addButton.style.right = "230px";
    }
  };
  return (
    <div className="flex items-center justify-center absolute w-full top-0 left-0 border-b border-grayish h-[10vh] bg-sand">
      <h1 className=" text-bluish text-5xl p-4 font-semibold w-full">Notes</h1>

      <Link to={"add"}>
        <button
          title="Add Notes"
          id="addButton"
          className="absolute top-4 right-4 sm:right-20"
        >
          <PlusIcon className="text-bluish w-10 h-10 hover:bg-bluish hover:text-sand rounded-full p-1" />
        </button>
      </Link>
      <input
        type="text"
        id="searchField"
        className="hidden p-2 rounded-md text-bluish absolute top-4 right-4 bg-whites outline-none"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={() => handleSearch()}
        title="Search"
        className="absolute top-4 right-4"
      >
        <MagnifyingGlassIcon
          id="searchButton"
          className="text-bluish w-10 h-10 hover:bg-bluish hover:text-sand rounded-full p-1 hidden sm:block"
        />
      </button>
    </div>
  );
};

export default Header;
