import React from "react";
import ReactDOM from "react-dom";
import Content from "./Content";
import Header from "./Header";
import "./index.css";
import Totals from "./Totals";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const partes = {
    p1: "Fundamentals of React",
    p2: "Using props to pass data",
    p3: "State of a component",
  };

  const ejercicios = {
    e1: 10,
    e2: 7,
    e3: 14,
  };

  //TODO: Make the 1.2 execise, refactoring the Content component. IDEA: A component that recive a obj.
  return (
    <div>
      <Header course={course} />
      <Content partes={partes} ejercicios={ejercicios} />
      <Totals
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
