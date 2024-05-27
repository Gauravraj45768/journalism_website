// import React, { useState } from "react";
// import testimonials from "./data";
// import "./all.css";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === testimonials.length - 2 ? 0 : prevIndex + 2
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 2 : prevIndex - 2
//     );
//   };

//   return (
//     <div>
//       <div className="bg-blue-400   ">
//         <div>
//           <h1 className="relative  text-3xl py-10 -bottom-10 text-teal-800 text-center">
//             Testimonials
//           </h1>
//         </div>
//         <div className="testicontainer flex justify-evenly items-center w-4/12  ">
//           <button onClick={prevSlide} className="mx-8">
//             <FaArrowLeft />
//           </button>
//           {testimonials
//             .slice(currentIndex, currentIndex + 1)
//             .map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="testimonial w-full h-auto flex flex-col justify-center items-center mx-12 left-16 border-2  text-center bg-slate-50 rounded-2xl p-4"
//               >
//                 <div className="  border-2 border-cyan-600 rotate-2	w-[125px] rounded-md p-1 m-2 bg-yellow-400 ">
//                   <img
//                     src={testimonial.img}
//                     alt="Testimonial Avatar"
//                   />
//                 </div>
//                 <div className="">
//                   <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
//                     {testimonial.author}
//                   </div>
//                   <p className="mt-2 text-gray-500">{testimonial.text}</p>
//                 </div>
//               </div>
//             ))}

//           <button onClick={nextSlide} className="mx-12">
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
import React, { useState } from "react";
import testimonials from "./data";
import "./all.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonials-container bg-blue-400 py-10 ">
      <h1 className="relative -bottom-10 text-3xl text-teal-800 text-center mb-10">Testimonials</h1>
      <div className="testicontainer flex justify-center items-center">
        <button onClick={prevSlide} className="mx-4">
          <FaArrowLeft />
        </button>
        {testimonials
          .slice(currentIndex, currentIndex + 1)
          .map((testimonial, index) => (
            <div
              key={index}
              className="testimonial bg-slate-50 rounded-2xl p-4 mx-4"
            >
              <div className="testimonial-img-wrapper border-2 border-cyan-600 rotate-2 w-[125px] rounded-md p-1 m-2 bg-yellow-400">
                <img
                  src={testimonial.img}
                  alt="Testimonial Avatar"
                  className="testimonial-img"
                />
              </div>
              <div className="text-center">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {testimonial.author}
                </div>
                <h3 className="mt-2 text-gray-500">{testimonial.text}</h3>
              </div>
            </div>
          ))}
        <button onClick={nextSlide} className="mx-4">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
