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

      <SecSection />
      <ThirdSection />
      <Footerbar />
    </div>
  );
}
