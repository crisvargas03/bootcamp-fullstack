import React from "react";

const Totals = ({ exercises1, exercises2, exercises3 }) => {
  return <h3>Number of exercises: {exercises1 + exercises2 + exercises3}</h3>;
};

export default Totals;
