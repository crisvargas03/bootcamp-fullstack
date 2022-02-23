import React from "react";
import Part from "./Part";

const Content = ({ allParts }) => {
  console.log(allParts);
  return (
    <div>
      {allParts.map((c) => (
        <Part part={c.name} exercise={c.exercises} />
      ))}
    </div>
  );
};

export default Content;
