import React, { useEffect, useRef } from "react";
import LandingComponent from "./LandingComponent";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
// import Lines from "./Lines";
import MyProjects from "./MyProjects";

export default function Home() {
  return (
    <div>
      {/* <Lines /> */}
      <LandingComponent />
      <Navbar />
      <AboutMe />
      <MyProjects />
      {/* Call To Action */}
      {/* Coding Challenges */}
      {/* Contact Me */}
    </div>
  );
}
