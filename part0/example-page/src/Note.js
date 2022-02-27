import React from "react";

const Note = ({ id, content, date }) => {
  //console.log(id, content, date);
  return (
    <div key={id}>
      <h2>{id}</h2>
      <p>{content}</p>
      <small>
        <time>{date}</time>
      </small>
    </div>
  );
};

export default Note;
