import React from "react";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

const SubNotes = ({ note }) => {
  return (
    <div className="mt-3 text-bluish">
      <div className="p-2 bg-whites rounded-md  opacity-60 cursor-pointer hover:opacity-100 shadow-md relative">
        <h1 className="p-2 font-semibold text-2xl">{note.title}</h1>
        <p className="p-2">
          {note.details.length > 25
            ? note.details.slice(0, 25) + "...."
            : note.details}
        </p>
        <span className="hidden sm:block absolute right-4 top-8 p-1 hover:text-whites hover:bg-bluish rounded-full">
          <TrashIcon className="w-8 h-8 " title="Delete" />
        </span>
        <span className="hidden sm:block absolute right-20 top-8 p-1 hover:text-whites hover:bg-bluish rounded-full">
          <PencilSquareIcon className="w-8 h-8 " title="Edit" />
        </span>
      </div>
    </div>
  );
};

export default SubNotes;
