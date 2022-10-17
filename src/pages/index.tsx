import Navbar from "../components/nav/NavSetup";
import FirstSec from "../components/main/FirstShowing";
import SecSection from "../components/main/SecShowing";
import ThirdSection from '../components/main/projectSec'
import Footerbar from '../components/footer/Footer'

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
    <div className="">
      <Navbar />
      <FirstSec />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2563EB"
          fillOpacity="1"
          d="M0,320L120,304C240,288,480,256,720,213.3C960,171,1200,117,1320,90.7L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
      <SecSection />
      <ThirdSection />
      <Footerbar />
    </div>
  );
}
