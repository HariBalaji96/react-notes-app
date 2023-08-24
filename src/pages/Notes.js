import React from "react";
import SubNotes from "../components/SubNotes";
import { Link } from "react-router-dom";

const Notes = ({ notes, setNotes }) => {
  return (
    <main className="mt-[10vh] p-2 bg-sand h-[80vh] overflow-y-scroll scrollbar-hide">
      {notes.map((note) => (
        <Link to={"/details/" + note.id}>
          <SubNotes key={note.id} note={note} />
        </Link>
      ))}
    </main>
  );
};

export default Notes;
