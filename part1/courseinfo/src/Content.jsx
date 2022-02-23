import React from "react";
import Part from "./Part";

const Content = ({ allParts }) => {
  console.log(allParts);
  return (
    <div>
      {allParts.map((c, index) => (
        <Part key={index + 1} part={c.name} exercise={c.exercises} />
      ))}
    </div>
  );
};

export default Content;
