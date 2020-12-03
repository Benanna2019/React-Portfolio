import React from "react";
import LandingComponent from "./LandingComponent";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
// import Lines from "./Lines";
import MyProjects from "./MyProjects";
import CallToAction from "./CallToAction";

export default function Home() {
  return (
    <div>
      {/* <Lines /> */}
      <LandingComponent />
      <Navbar />
      <AboutMe />
      <CallToAction />
      <MyProjects />
      {/* Coding Challenges */}
      {/* Contact Me */}
    </div>
  );
}
