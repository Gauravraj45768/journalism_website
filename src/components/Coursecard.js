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
