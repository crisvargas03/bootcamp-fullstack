import "./App.css";
import React, { useEffect, useState } from "react";

const App = ({ anecdotes }) => {
  const points = [1, 1, 1, 1, 1, 1];
  const [selected, setSelected] = useState(0);

  const handleNext = () => {
    setSelected(Math.floor(Math.random() * (5 - 0)) + 0);
  };

  const handleVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    console.log(copy[selected]);
  };

  return (
    <div className="App">
      <h1>{anecdotes[selected]}</h1>
      <p>The anecdotes has {points[selected]} votes</p>
      <button onClick={handleNext}>next anecdotes</button>
      <button onClick={handleVote}>vote</button>
    </div>
  );
};

export default App;
