import React from "react";
import { About } from "../components/About";
import Testimonials from "../components/Testimonials";
import Course from "../components/Course";
import { Home } from "./Home";

export const Landingpage = () => {
  return (
    <div>
      <Home />
      <Course />
      <About />
      <Testimonials/>
       
    </div>
  );
};
