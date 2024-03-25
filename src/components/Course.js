import React from "react";

import Coursecard from "./Coursecard";

const Course = () => {
  return (
    <div   className="coursecontainer">
      <h1 className="relative w-100vw h-100vh text-center -bottom-20 text-3xl text-teal-800 z-300">
        {" *"} 
        Explore Our Courses{"*"}
      </h1>
      <Coursecard />
    </div>
  );
};

export default Course;
