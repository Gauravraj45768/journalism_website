import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  toast } from "react-hot-toast";

 
function Enrolment() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isAgree: true,
    mode: "",
    favCar: "",
  });

  function changeHandler(event) {
    const { name, value, } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]:value,
      };
    });
  }

  function submitHandler(event) {
      event.preventDefault();
      navigate("/")
       toast.success("Form submitted successfully!");
    console.log("Form Data:");
    console.log(formData);
  }

  return (
    <>
      <div className="w-[450px]  relative mx-auto">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center absolute   border-l-emerald-100 border-2 w-[400px] mx-auto p-4 mt-20 "
        >
          <input
            type="text"
            placeholder="Enter First name"
            onChange={changeHandler}
            name="firstName"
            value={formData.firstName}
            className="w-full px-4 py-2  border rounded-md focus:outline-none focus:border-blue-500 flex gap-2"
          />

          <input
            type="text"
            placeholder="Enter Last name"
            onChange={changeHandler}
            name="lastName"
            value={formData.lastName}
            className="w-full px-4 py-2 my-2 border rounded-md focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Enter Email..."
            onChange={changeHandler}
            name="email"
            value={formData.email}
            className="w-full px-4 py-2 my-3 border rounded-md focus:outline-none focus:border-blue-500"
          />

          <input
            type="number"
            placeholder="Enter Phone No"
            onChange={changeHandler}
            name="phoneNo"
            value={formData.phoneNo}
            className="w-full px-4 py-2  my-3 border rounded-md focus:outline-none focus:border-blue-500"
          />

          <select
            name="favCar"
            id="favCar"
            value={formData.favCar}
            onChange={changeHandler}
            className="w-full px-4 py-2 my-3 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="Marketing">Marketing Skill</option>
            <option value="Social">Social Media Skill</option>
            <option value="Reporting">Reporting Skill</option>
            <option value="Ethical">Ethical Journalism</option>
            <option value="Introduction">Introduction To The Journalism</option>
          </select>

         

          <input
            type="submit"
            value="Submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}




export default Enrolment;