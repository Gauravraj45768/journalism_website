import React, { useState } from "react";
import testimonials from "./data";
import "./all.css";
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 2 ? 0 : prevIndex + 2
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 2 : prevIndex - 2
    );
  };

  return (
    <div>
      <div className="bg-blue-400   ">
        <div>
          <h1 className="relative  text-3xl py-10 -bottom-10 text-teal-800 text-center">
            Testimonials
          </h1>
        </div>
        <div className="testicontainer flex justify-evenly items-center w-3/12  ">
          <button
            onClick={prevSlide}
            className=" left-0  top-1/2 transform -translate-y-1/2  text-black px-4 py-2 rounded-full "
          >
            <FaArrowLeft />
          </button>
          {testimonials
            .slice(currentIndex, currentIndex + 1)
            .map((testimonial, index) => (
              <div
                key={index}
                className="testimonial w-full h-auto flex flex-col justify-center items-center mx-12 left-16 border-2  text-center bg-slate-50 rounded-2xl p-4"
              >
                <div className=" m-12 bg-violet-400 ">
                  <img
                    src={testimonial.img}
                    width={"150px"}
                    height={"auto"}
                    alt="Testimonial Avatar"
                  />
                </div>
                <div className="">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {testimonial.author}
                  </div>
                  <p className="mt-2 text-gray-500">{testimonial.text}</p>
                </div>
              </div>
            ))}

          <button
            onClick={nextSlide}
            className="right-0 top-1/2 transform -translate-y-1/2 text-black px-4 py-2 rounded-full "
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
