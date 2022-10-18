import Navbar from "../components/nav/NavSetup";
import FirstSec from "../components/main/FirstShowing";
import SecSection from "../components/main/SecShowing";
import ThirdSection from "../components/main/projectSec";
import Footerbar from "../components/footer/Footer";

import React, { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log("did start3");
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("working?");
          entry.target.classList.add("show");
        } else {
          // console.log("working?");
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");

    hiddenElements.forEach((el) => {
      observer.observe(el);
      console.log("did start2");
    });
    console.log("did start");
  });
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <FirstSec />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2563EB"
          fillOpacity="1"
          d="M0,64L60,90.7C120,117,240,171,360,186.7C480,203,600,181,720,176C840,171,960,181,1080,186.7C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <SecSection />
      <ThirdSection />
      <Footerbar />
    </div>
  );
}
