import React from "react";
// import img from "../assests/j2.jpeg";
import "./Home.css";
import { About } from "../components/About";
import { Highlights } from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import Course from "../components/Course";

export const Home = () => {
  return (
    <div>
      <diV
        style={{
          display: "flex",
          backgroundImage: `url(${require("../assests/bg.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          justifyContent: "space-evenly",
          width: "100%",
          height: "700px",
        }}
      >
        <div className="homeContainer">
          <div className="text-contentHome">
            <h1>Welcome to Mr.Arun'journalism Course </h1>
            <p className="text-black ">
              Comprehensive learning programs & classes <br></br> for all
              students Become lifelong learners with <br></br>over 30 years of
              experience in the field.
            </p>
          </div>
          <div >
            {/* <img className="homeImg" src={img} loading="lazy" alt="" /> */}
            <iframe width="300" height="200" src="https://www.youtube.com/embed/deip2YAygrM?si=Yi7oXwNQazBOe1qf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
              
          </div>
        </div>
      </diV>
      <Course />
      <About />
      <Highlights></Highlights>
      <Testimonials></Testimonials>
    </div>
  );
};
