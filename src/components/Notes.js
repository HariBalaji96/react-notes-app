import React from "react";
import SubNotes from "./SubNotes";

const Notes = ({ notes, setNotes }) => {
  return (
    <main className="mt-[10vh] p-2 bg-sand h-[80vh] overflow-y-scroll scrollbar-hide">
      {notes.map((note) => (
        <SubNotes key={note.id} note={note} />
      ))}
    </main>
  );
};

export default Notes;
