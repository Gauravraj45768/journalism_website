

import React, { useState } from "react";
import { allcourse } from "./jounalismcourse";

const Coursecard = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoId, setVideoId] = useState("");

  const handleDemoVideo = (id) => {
    setShowVideo(true);
    setVideoId(id);
  };

  return (
    <div className=" flex gap-3 items-center justify-evenly  ">
      {allcourse.slice(0, 3).map((course, index) => (
        <div
          key={index}
          className="bg-teal-400 border-4 shadow-lg  my-32"
          style={{
            width: "400px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "25px",
            boxShadow: "rgba(0, 123, 123, 0.298039) ",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div className="px-6 py-4  text-center flex-col justify-center items-center">
            <div>
              <img
                src={course.img}
                alt="Testimonial Avatar"
                style={{
                  marginTop: "32px",
                  width: "200px",
                  height: "150px",
                  borderRadius: "5px",
                  marginLeft: "75px",
                }}
              />
            </div>
            <div>
              <h1 className="font-bold text-xl m-2 text-teal-800 ">
                {course.title}
              </h1>
              <p className="text-gray-700 text-base  text-left text-prettym-1 overflow-hidden">
                {course.description}
              </p>
              <div className="flex justify-between items-center">
                <h2 className="text-white text-sm m-0 text-left">
                  duration: {course.duration}
                </h2>
                <button
                  onClick={() => handleDemoVideo(course.videoId)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  demo video
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {showVideo && (
        <div className="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50">
          <div
            className="relative"
            style={{ padding: "56.25% 0 0 0", maxWidth: "800px" }}
          >
            <iframe
              title="Demo Video"
              width="1056"
              height="594"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
           
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-0 right-0 m-4 text-white text-xl bg-transparent rounded-full p-2 hover:bg-gray-700"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Coursecard;
