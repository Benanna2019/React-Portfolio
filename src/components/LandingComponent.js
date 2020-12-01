import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/landingcomp.css";

gsap.registerPlugin(ScrollTrigger);

export default function LandingComponent() {
  let intro = useRef(null);
  useEffect(() => {
    textIntro(intro);
  }, []);

  const textIntro = (elem) => {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        toggleActions: "restart pause resume none",
      },
      xPercent: -20,
      opacity: 0,
      stagger: 0.2,
      duration: 2,
      delay: 2,
      scale: -1,
      ease: "back",
    });
  };
  const name = "Ben Patton";
  return (
    <div className="Landing-Container">
      <div className="text-container">
        <h1 className="intro" ref={(el) => (intro = el)}>
          Hello, I'm<span className="highlight">{name}</span>.
          <div>I am a full-stack software developer.</div>
        </h1>
      </div>
    </div>
  );
}
