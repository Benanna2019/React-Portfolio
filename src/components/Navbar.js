import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-scroll";
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
        start: "top center",
        toggleActions: "play none none none",
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
        <button className="btn home">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </button>
        <button className="btn about-me">
          <Link to="aboutMe" smooth={true} duration={500}>
            About Me
          </Link>
        </button>
        <button className="btn projects">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </button>
        {/* <button className="btn coding-challenges">
          <Link to="codingChallenges" smooth={true} duration={500}>
            Coding Challenges
          </Link>
        </button> */}
        <button
          className="btn blog"
          onClick={() =>
            window.open("https://next-js-blog-xi.vercel.app/", "_blank")
          }
        >
          My Blog
        </button>
        <button className="btn contact">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </button>
      </div>
    </div>
  );
}

// {/* <button className="btn skills">
//           <Link to="skills" smooth={true} duration={500}>
//             Skills
//           </Link>
//         </button> */}
