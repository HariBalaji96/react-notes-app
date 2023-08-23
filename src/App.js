import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Notes from "./components/Notes";

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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet sapiente quasi eos facere impedit libero iure accusamus, quis dolor ratione aspernatur blanditiis eius vero repellat vitae? Expedita, nostrum ad?",
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
  return (
    <div className="App scrollbar-hide">
      <Header />
      <Notes notes={notes} setNotes={setNotes} />
      <Footer length={notes.length} />
    </div>
  );
}

export default App;
