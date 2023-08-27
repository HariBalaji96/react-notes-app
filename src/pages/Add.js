import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Add = ({ setNotes, notes }) => {
  const [title, setTitle] = useState([]);
  const [details, setDetails] = useState([]);
  const Navigate = useNavigate();
  function handleAdd(e) {
    e.preventDefault();
    let noteId;
    notes.length ? (noteId = notes[notes.length - 1].id) : (noteId = 1);
    let newNotes = [
      ...notes,
      {
        id: noteId + 1,
        title: title,
        details: details,
      },
    ];
    console.log(newNotes);
    setNotes(newNotes);
    Navigate("/");
  }
  return (
    <div className="mt-[10vh] p-2 bg-sand h-[80vh] overflow-y-scroll scrollbar-hide">
      <form
        className="flex flex-col items-center"
        onSubmit={(e) => handleAdd(e)}
      >
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="w-[90%] outline-none border-grayish text-bluish border-2 p-5 my-5 rounded-full text-2xl font-semibold"
        />
        <textarea
          cols="30"
          rows="10"
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Note"
          required
          className="w-[90%] p-2 outline-none resize-none text-bluish  border-grayish border-2  my-5 rounded-md  font-semibold "
        ></textarea>
        <button
          type="submit"
          className="bg-bluish p-2 rounded-md text-whites hover:bg-whites  hover:text-bluish"
        >
          Add Notes
        </button>
      </form>
    </div>
  );
};

export default Add;
