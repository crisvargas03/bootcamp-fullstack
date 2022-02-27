import React from "react";
import Part from "./Part";
import Totals from "./Totals";

const Content = ({ content }) => {
  const allparts = content[0].concat(content[1]);
  // console.log(
  //   "props from content: ",
  //   allparts.map((al) => al.exercises)
  // );
  return (
    <div>
      {allparts.map((c, index) => (
        <Part key={index + 1} part={c.name} exercise={c.exercises} />
      ))}
      <Totals allExercises={allparts.map((al) => al.exercises)} />
    </div>
  );
};

export default Content;
