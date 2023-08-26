import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const SubNotes = ({ notes, note, setNotes }) => {
  const handleDelete = (id) => {
    let newNote = notes.filter((i) => i.id != id);
    setNotes(newNote);
  };

  return (
    <div className="mt-3 text-bluish">
      <div className="p-2 bg-whites rounded-md  opacity-60 cursor-pointer hover:opacity-100 shadow-md relative">
        <Link to={"/details/" + note.id}>
          <h1 className="p-2 font-semibold text-2xl hover:underline">
            {note.title}
          </h1>

          <p className="p-2">
            {note.details.length > 25
              ? note.details.slice(0, 25) + "...."
              : note.details}
          </p>
        </Link>
        <button
          onClick={() => handleDelete(note.id)}
          className="hidden sm:block absolute right-4 top-8 p-1 hover:text-whites hover:bg-bluish rounded-full"
        >
          <TrashIcon className="w-8 h-8 " title="Delete" />
        </button>
      </div>
    </div>
  );
};

export default SubNotes;
