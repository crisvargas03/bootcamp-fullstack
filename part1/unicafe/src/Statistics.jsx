import React from "react";
import Statistic from "./Statistic";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  return (
    <div>
      <h2>Statistics from Component</h2>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="Average" value={all - neutral} />
      <Statistic text="Positive" value={all - bad} />
    </div>
  );
};

export default Statistics;
