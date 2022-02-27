import React, { useState } from "react";
import Note from "./Note";

const App = ({ Notes }) => {
  const [notes, setNotes] = useState(Notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handleChange = (event) => {
    //! console.log(event.target.value);
    setNewNote(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //! console.log("Create the note");
    //! console.log(newNote);
    const noteToAdd = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };
    //! console.table(noteToAdd);
    setNotes(notes.concat(noteToAdd));
    setNewNote("");
  };

  const handleShowAll = () => {
    setShowAll(() => !showAll);
  };

  return (
    <div>
      <h1>Pagina de Ejemplos</h1>
      <button onClick={handleShowAll}>
        {showAll ? "Show only important" : "Show all"}
      </button>
      <div>
        {notes
          .filter((note) => {
            if (showAll === true) return true;
            return note.important === true;
          })
          .map((note) => (
            <Note
              key={note.id}
              id={note.id}
              content={note.content}
              date={note.date}
            />
          ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>create new note</button>
        {/*Last button of a form is declarated like a submit*/}
      </form>
    </div>
  );
};

export default App;
