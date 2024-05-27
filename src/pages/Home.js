
import React from "react";
import "./Home.css";
export const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundImage: `url(${require("../assests/bg.png")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "700px",
      }}
    >
      <div className="homeContainer">
        <div className="text-contentHome">
          <h1>Welcome to Mr.Gaurav Raj Journalism Course</h1>
          <p className="text-black">
            Comprehensive learning programs & classes
            <br />
            for all students. Become lifelong learners with
            <br />
            over 30 years of experience in the field.
          </p>
        </div>
        <div>
          {/* <img className="homeImg" src={img} loading="lazy" alt="" /> */}
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/deip2YAygrM?si=Yi7oXwNQazBOe1qf"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    // </div>
  );
};
