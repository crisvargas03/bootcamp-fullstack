import React from "react";

const Content = ({ part, exercise }) => {
  return (
    <p>
      <strong>{part}:</strong> {exercise}
    </p>
  );
};

export default Content;
