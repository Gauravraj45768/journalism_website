import React from "react";
import { About } from "../components/About";
import { Highlights } from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import Course from "../components/Course";
import { Home } from "./Home";

export const Landingpage = () => {
  return (
    <div>
      <Home />
      <Course />
      <About />
      <Highlights/>
          <Testimonials/>
       
    </div>
  );
};
