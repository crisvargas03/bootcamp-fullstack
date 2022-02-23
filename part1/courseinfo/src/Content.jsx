import React from "react";
import Part from "./Part";

const Content = ({ partes, ejercicios }) => {
  return (
    <div>
      <Part part={partes.p1} exercise={ejercicios.e1} />
      <Part part={partes.p2} exercise={ejercicios.e2} />
      <Part part={partes.p3} exercise={ejercicios.e3} />
    </div>
  );
};

export default Content;
