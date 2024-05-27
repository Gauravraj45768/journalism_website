// import { allcourse } from "./jounalismcourse";
// const Coursecard = () => {
//   const handleDemoVideo = (id) => {
//     window.open(`https://www.youtube.com/watch?v=${id}`, "_blank");
//   };

//   return (
//     <div className=" flex gap-3 items-center justify-evenly m-4 ">
//       {allcourse.slice(0, 3).map((course, index) => (
//         <div
//           key={index}
//           className="bg-teal-400 border-4 shadow-lg  my-32"
//           style={{
//             minwidth: "400px",
//             minheight: "400px",
//             display: "flex",
//             flexDirection: "column",
//             borderRadius: "25px",
//             boxShadow: "rgba(0, 123, 123, 0.298039) ",
//             justifyContent: "space-evenly",
//             alignItems: "center",
//           }}
//         >
//           <div className="px-6 py-4  text-center flex-col justify-center items-center">
//             <div>
//               <img
//                 src={course.img}
//                 alt="Testimonial Avatar"
//                 style={{
//                   marginTop: "32px",
//                   width: "200px",
//                   height: "150px",
//                   borderRadius: "5px",
//                   marginLeft: "75px",
//                 }}
//               />
//             </div>
//             <div>
//               <h1 className="font-bold text-xl m-2 text-teal-800 ">
//                 {course.title}
//               </h1>
//               <p className="text-gray-700 text-base  text-left text-prettym-1 overflow-hidden">
//                 {course.description}
//               </p>
//               <div className="flex justify-between items-center">
//                 <h2 className="text-white text-sm m-0 text-left">
//                   duration: {course.duration}
//                 </h2>
//                 <button
//                   onClick={() => handleDemoVideo(course.videoId)}
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 >
//                   Demo video
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Coursecard;

// import { allcourse } from "./jounalismcourse";
// import "./all.css";

// const Coursecard = () => {
//   const handleDemoVideo = (id) => {
//     window.open(`https://www.youtube.com/watch?v=${id}`, "_blank");
//   };

//   return (
//     <div className="coursecard-container">
//       <h1 className="relative w-100vw  text-center -bottom-20 text-3xl text-teal-800 z-300">
//         {" *"}
//         Explore Our Courses{"*"}
//       </h1>
//       {allcourse.slice(0, 3).map((course, index) => (
//         <div key={index} className="coursecard">
//           <div className="coursecard-content">
//             <div className="coursecard-image">
//               <img src={course.img} alt="Course Avatar" />
//             </div>
//             <div className="coursecard-info">
//               <h1 className="coursecard-title">{course.title}</h1>
//               <p className="coursecard-description">{course.description}</p>
//               <div className="coursecard-footer">
//                 <h2 className="coursecard-duration">
//                   Duration: {course.duration}
//                 </h2>
//                 <button
//                   onClick={() => handleDemoVideo(course.videoId)}
//                   className="coursecard-button"
//                 >
//                   Demo video
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Coursecard;


import { allcourse } from "./jounalismcourse";
import "./all.css";

const Coursecard = () => {
  const handleDemoVideo = (id) => {
    window.open(`https://www.youtube.com/watch?v=${id}`, "_blank");
  };

  return (
    <div>
      <h1 className="coursecard-header">Explore Our Courses</h1>
      <div className="coursecard-container">
        {allcourse.slice(0, 3).map((course, index) => (
          <div key={index} className="coursecard">
            <div className="coursecard-content">
              <div className="coursecard-image">
                <img src={course.img} alt="Course Avatar" />
              </div>
              <div className="coursecard-info">
                <h1 className="coursecard-title">{course.title}</h1>
                <p className="coursecard-description">{course.description}</p>
                <div className="coursecard-footer">
                  <h2 className="coursecard-duration">
                    Duration: {course.duration}
                  </h2>
                  <button
                    onClick={() => handleDemoVideo(course.videoId)}
                    className="coursecard-button"
                  >
                    Demo video
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coursecard;
