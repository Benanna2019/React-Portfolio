import React, { useEffect, useRef } from "react";
import LandingComponent from "./LandingComponent";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Lines from "./Lines";
import Projects from "./Projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // const Reveal = ({ children }) => {
  //   const revealRef = useRef();

  //   useEffect(() => {
  //     gsap.to(revealRef.current, {
  //       scrollTrigger: ".reveal",
  //       y: 500,
  //       duration: 2,
  //     });
  //   }, []);

  //   return <div ref={revealRef}>{children}</div>;
  // };
  return (
    <div>
      <Lines />
      <LandingComponent />
      <Navbar />
      <AboutMe />
      {/* <Projects /> */}
      {/* Call To Action */}
      {/* Coding Challenges */}
      {/* Contact Me */}
    </div>
  );
}
