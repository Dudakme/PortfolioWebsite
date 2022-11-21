import Navbar from "../components/nav";
import Slider from "../components/Sections/slider";
import Experiences from "../components/Sections/experiences";
import Projects from "../components/Sections/projects";
import Footer from "../components/Sections/footer";

import React from "react";

const Home = () => (
  <div className="overflow-x-hidden">
    <Navbar />
    <Slider />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#2563EB"
        fillOpacity="1"
        d="M0,320L120,304C240,288,480,256,720,213.3C960,171,1200,117,1320,90.7L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
      ></path>
    </svg>
    <Experiences />
    <Projects />
    <Footer />
  </div>
);

export default Home;