import React from "react";

const Totals = ({ allExercises }) => {
  //! console.log("totals: ", allExercises);
  const sumAll = allExercises
    .map((item) => item)
    .reduce((prev, curr) => prev + curr, 0);
  //! console.log("sum values: ", sumAll);

  return <h3>Number of exercises: {sumAll} </h3>;
};

export default Totals;
