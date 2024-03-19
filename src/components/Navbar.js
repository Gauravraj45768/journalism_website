import React from "react";

import { GiNotebook } from "react-icons/gi";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="flex justify-between items-center  w-full px-2 sm:px-6 lg:px-8 h-16  bg-teal-400  fixed">
      <NavLink to="/">
        <GiNotebook
          style={{
            color: "#FFF",
            fontSize: "45px",
            height: "100px",
            marginTop: "7px",
            width: "auto",
            padding: "5px",
          }}
        ></GiNotebook>
      </NavLink>

      <nav>
        <ul className="flex gap-x-6 text-richblack-100">
          <li>
            <NavLink className="active:text-violet-700" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="active:text-violet-700" to="/highlight">
              Highlights
            </NavLink>
          </li>
          <li>
            <NavLink className="active:text-violet-700" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="active:text-violet-700" to="/testimonial">
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink className="active:text-violet-700" to="/course">
              Courses
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className=" text-richblack-100">
        <NavLink to="/login">
          <button className="bg-richblack-800 py-[8px] px-[12px] hover:bg-teal-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-teal-300 rounded-[8px] border border-richblack-700">
            Enroll now
          </button>
        </NavLink>
      </div>
    </div>
  );
};
