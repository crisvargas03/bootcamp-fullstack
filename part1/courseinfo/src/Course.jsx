import React from "react";
import Content from "./Content";
import Header from "./Header";

const Course = ({ course }) => {
  // console.log(
  //   "props for course: ",
  //   course.map((c) => c.parts.map((p) => p))
  // );
  return (
    <div>
      <Header header={course} />
      <Content content={course.map((c) => c.parts)} />
    </div>
  );
};

export default Course;
