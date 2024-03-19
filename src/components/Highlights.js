import React from "react";
import "./all.css";

export const Highlights = () => {
  return (
    <div>
      <div className="highlightcontainer ">
        <h1 className=" text-teal-800 text-2xl ">Course Highlights</h1>
        <p className="text-gray-700">
          <ol>
            <li>
              Learn from a seasoned journalist with over 30 years of experience
            </li>
            <li>Get practical insights into the field of journalism</li>
            <li>
              Participate in interactive sessions and get feedback on your work
            </li>
            <li>Gain a certificate of completion at the end of the course</li>
          </ol>
        </p>
      </div>
    </div>
  );
};
