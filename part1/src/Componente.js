import React from "react";

const Componente = ({ message, colors }) => {
  return <h2 style={{ color: colors }}>{message}</h2>;
};

export default Componente;
