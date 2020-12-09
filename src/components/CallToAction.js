import React, { useRef, useEffect } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/cta.css";

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  let intro = useRef(null);
  // let buttons = useRef(null);
  useEffect(() => {
    ctaIntro(intro);
  }, []);

  // useEffect(() => {
  //   buttonIntro(buttons);
  // }, []);

  const ctaIntro = (elem) => {
    // const tl = gsap.timeline();
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        start: "top center",
        toggleActions: "play none none none",
      },
      duration: 2.5,
      opacity: 0,
      scale: 0,
      rotation: 720,
    });
    gsap.to(elem, {
      opacity: 1,
      scale: 1,
      rotation: 0,
    });
  };

  // const buttonIntro = (elem) => {
  //   // const tl = gsap.timeline();
  //   gsap.from(elem, {
  //     scrollTrigger: {
  //       trigger: elem,
  //     },
  //     duration: 1,
  //     opacity: 0,
  //     stagger: 0.5,
  //   });
  // };

  return (
    <div className="CTA-container" ref={(el) => (intro = el)}>
      <div className="call-container">
        <div className="headerTxt">Let's work together!</div>
        <div>
          I am available for fulltime or freelance projects. Lets build
          something awesome!
        </div>
      </div>
      <button className="cta-button">
        <Link to="contact" smooth={true} duration={500}>
          Hire Me!
        </Link>
      </button>
    </div>
  );
}
