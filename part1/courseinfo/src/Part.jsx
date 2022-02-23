import React from "react";

const Part = ({ part, exercise }) => {
  return (
    <p>
      <strong>{part}:</strong> {exercise}
    </p>
  );
};

export default Part;
