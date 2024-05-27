// import React from "react";
// import "./all.css";
// import { GiNotebook } from "react-icons/gi";
// import { NavLink } from "react-router-dom";
// export const Navbar = () => {
//   return (
//     <div className=" navbar flex justify-between items-center   px-2 sm:px-6 lg:px-8 h-16  bg-teal-400  ">
//       <NavLink to="/">
//         <GiNotebook
//           style={{
//             color: "#FFF",
//             fontSize: "45px",
//             height: "100px",
//             marginTop: "7px",
//             width: "auto",
//             padding: "5px",
//           }}
//         ></GiNotebook>
//       </NavLink>

//       <nav>
//         <ul className="flex gap-x-6 text-richblack-100">
//           <li>
//             <NavLink className="active:text-violet-700" to="/">
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="active:text-violet-700" to="/highlight">
//               Highlights
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="active:text-violet-700" to="/about">
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="active:text-violet-700" to="/testimonial">
//               Testimonials
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="active:text-violet-700" to="/course">
//               Courses
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//       <div className=" text-richblack-100">
//         <NavLink to="/login">
//           <button className="bg-richblack-800 py-[8px] px-[12px] hover:bg-teal-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-teal-300 rounded-[8px] border border-richblack-700">
//             Enroll now
//           </button>
//         </NavLink>
//       </div>
//     </div>
//   );
// };





import React, { useState } from "react";
import "./all.css";
import { GiNotebook } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar flex justify-between items-center px-2 sm:px-6 lg:px-8 h-16 bg-teal-400">
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
        />
      </NavLink>

      <nav>
        <ul
          className={`flex gap-x-6 text-richblack-100 ${
            menuOpen ? "active" : ""
          }`}
        >
          <li>
            <NavLink
              className="active:text-violet-700"
              to="/"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="active:text-violet-700"
              to="/highlight"
              onClick={toggleMenu}
            >
              Highlights
            </NavLink>
          </li>
          <li>
            <NavLink
              className="active:text-violet-700"
              to="/about"
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="active:text-violet-700"
              to="/testimonial"
              onClick={toggleMenu}
            >
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink
              className="active:text-violet-700"
              to="/course"
              onClick={toggleMenu}
            >
              Courses
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="text-richblack-100">
        <NavLink to="/login" onClick={toggleMenu}>
          <button className="enroll-button">Enroll now</button>
        </NavLink>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};
