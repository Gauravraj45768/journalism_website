import "./App.css";
import { About } from "./components/About";
import Footer from "./components/Footer";
import { Highlights } from "./components/Highlights";
import { Navbar } from "./components/Navbar";
import  Testimonials  from "./components/Testimonials";
import {Route,Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import Course from "./components/Course";
function App() {
  return (
    <div>
      {/* <Navbar />
      <Home />
       */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/highlight" element={<Highlights />} />
        <Route path="/course" element={<Course />} />
      </Routes>     
      <Footer />
    </div>
  );
}

export default App;
