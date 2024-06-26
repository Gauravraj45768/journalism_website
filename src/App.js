
import { About } from "./components/About";
import Footer from "./components/Footer";
import { Highlights } from "./components/Highlights";
import { Navbar } from "./components/Navbar";
import  Testimonials  from "./components/Testimonials";
import {Route,Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import Course from "./components/Course";
import Enrolment from "./components/Enrolment";
import { Landingpage } from "./pages/Landingpage";
function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/highlight" element={<Highlights />} />
        <Route path="/course" element={<Course />} />
        <Route path="/login" element={<Enrolment />} />
        <Route path="/footer" element={<Footer />} />
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
