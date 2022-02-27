import React from "react";

const Header = ({ header }) => {
  //! console.log("props form header", header);
  return (
    <div>
      {header.map((h) => (
        <h1 key={h.id}>{h.name}</h1>
      ))}
    </div>
  );
};

export default Header;
