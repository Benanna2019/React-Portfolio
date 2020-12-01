import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/navbar.css";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  let intro = useRef(null);
  // let buttons = useRef(null);
  useEffect(() => {
    navBarIntro(intro);
  }, []);

  // useEffect(() => {
  //   buttonIntro(buttons);
  // }, []);

  const navBarIntro = (elem) => {
    // const tl = gsap.timeline();
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        toggleActions: "restart pause resume none",
      },
      duration: 2.5,
      ease: "bounce",
      x: "-100vw",
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
    <div className="Navbar-Container" ref={(el) => (intro = el)}>
      <div className="Btn-Container">
        <button className="btn about-me">About Me</button>
        <button className="btn coding-challenges">Coding Challenges</button>
        <button className="btn projects">Projects</button>
        <button className="btn blog">
          <a
            className="btn href"
            href="https://next-js-blog-xi.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            My Blog
          </a>
        </button>
        <button className="btn contact">Contact</button>
      </div>
    </div>
  );
}
