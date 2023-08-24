import React from "react";
import { useParams } from "react-router-dom";

const Details = ({ notes }) => {
  let { id } = useParams();
  return (
    <main className="mt-[10vh] p-2 bg-grayish  h-[80vh] overflow-y-scroll scrollbar-hide">
      {notes.map((note) =>
        note.id == id ? (
          <div>
            <h1 className="text-center text-3xl  mt-4 underline  font-semibold text-whites">
              {note.title}
            </h1>
            <p
              className="text-lg text-whites text-opacity-80 m-3"
              style={
                note.details.length < 50
                  ? { textAlign: "center" }
                  : { textAlign: "left" }
              }
            >
              {note.details}
            </p>
          </div>
        ) : null
      )}
    </main>
  );
};

export default Details;
