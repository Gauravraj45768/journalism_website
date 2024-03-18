import React from 'react'
import "./all.css"
export const About = () => {
  return (
    // flex items-center
    <div className="aboutcontainer">
      <h1 className=" text-teal-600  text-3xl ">About me</h1>
      <p className="text-gray-700">
        Mr. Arun, a seasoned journalist with over 30 years of experience in the{" "}
        <br></br>
        field, has recently retired and is now dedicating his time to educating
        <br></br>
        the next generation of journalists. His career spans multiple news
        <br></br>
        agencies and he has covered a wide range of topics from politics to
        <br></br>
        sports, making him a versatile professional in the field.
      </p>
    </div>
  );
}
