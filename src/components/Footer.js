import React from 'react'
import "./all.css";
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
 const Footer = () => {
  return (
    <div className=" footer flex justify-around justtify-center  items-center  text-white  bg-gray-500 ">
      <div className="flex gap-3 mb-4">
        <NavLink className="active:text-violet-700" to="/">
          Home
        </NavLink>
        <NavLink className="active:text-violet-700" to="/about">
          About
        </NavLink>
        <NavLink className="active:text-violet-700" to="/testimonial">
          Testimonial
        </NavLink>
        <NavLink className="active:text-violet-700" to="/highlight">
          highlights
        </NavLink>
        <NavLink className="active:text-violet-700" to="/course">
          Courses
        </NavLink>
      </div>
      <div>
        <p>contact us</p>

        <div className="space-x-4 flex mb-8">
          <NavLink to="#" className="text-gray-300 hover:text-black">
            <FaFacebook />
          </NavLink>
          <NavLink to="#" className="text-gray-300 hover:text-black">
            <FaTwitter />
          </NavLink>
          <NavLink to="#" className="text-gray-300 hover:text-black">
            <FaLinkedin />
          </NavLink>
          <NavLink to="#" className="text-gray-300 hover:text-black">
            <FaInstagram />
          </NavLink>
        </div>
      </div>
    </div>
  );
}


export default Footer;