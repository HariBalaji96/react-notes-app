import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Error from "./pages/Error";
import Notes from "./pages/Notes";
import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Add from "./pages/Add";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "75-Days Challenge",
      details: "It is a challenge",
    },
    {
      id: 2,
      title: "Project MAANG",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet sapiente quasi eos facere impedit libero iure accusamus, quis dolor ratione aspernatur blanditiis eius vero repellat vitae? Expedita, nostrum ad?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet sapiente quasi eos facere impedit libero iure accusamus, quis dolor ratione aspernatur blanditiis eius vero repellat vitae? Expedita, nostrum ad?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet sapiente quasi eos facere impedit libero iure accusamus, quis dolor ratione aspernatur blanditiis eius vero repellat vitae? Expedita, nostrum ad?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet sapiente quasi eos facere impedit libero iure accusamus, quis dolor ratione aspernatur blanditiis eius vero repellat vitae? Expedita, nostrum ad?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet sapiente quasi eos facere impedit libero iure accusamus, quis dolor ratione aspernatur blanditiis eius vero repellat vitae? Expedita, nostrum ad?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet sapiente quasi eos facere impedit libero iure accusamus, quis dolor ratione aspernatur blanditiis eius vero repellat vitae? Expedita, nostrum ad?",
    },
    {
      id: 3,
      title: "DSA1",
      details: "Data structure & Algorithm",
    },
    {
      id: 4,
      title: "DSA2",
      details: "Data structure & Algorithm",
    },
    {
      id: 5,
      title: "DSA3",
      details: "Data structure & Algorithm",
    },
    {
      id: 6,
      title: "DSA4",
      details: "Data structure & Algorithm",
    },
    {
      id: 7,
      title: "DSA5",
      details: "Data structure & Algorithm",
    },
  ]);
  const [search, setSearch] = useState("");
  return (
    <div className="App scrollbar-hide">
      <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route
          index
          path="/"
          element={
            <Notes
              notes={
                search
                  ? notes.filter((note) =>
                      note.title.toLowerCase().includes(search.toLowerCase())
                    )
                  : notes
              }
              setNotes={setNotes}
            />
          }
        />
        <Route path="/details/:id" element={<Details notes={notes} />} />
        <Route
          path="/add"
          element={<Add setNotes={setNotes} notes={notes} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer length={notes.length} />
    </div>
  );
}

export default App;
