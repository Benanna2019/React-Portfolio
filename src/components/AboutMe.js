import React from "react";
import "../styles/aboutme.css";
import Javascript from "../images/iconfinder_187_Js_logo_logos_4373213.png";
import Css from "../images/iconfinder_badge-css-3_317756.png";
import Html from "../images/iconfinder_badge-html-5_317755.png";
import MySql from "../images/iconfinder_MySQL_1012821.png";
import Node from "../images/iconfinder_nodejs-new-black_1012819.png";
import ReactLogo from "../images/iconfinder_React.js_logo_1174949.png";
import PortfolioPhoto from "../images/PorfolioPhoto.png";

export default function AboutMe() {
  return (
    <div className="Aboutme-Container" id="aboutMe">
      <div className="profile-section">
        <img
          className="portfolio-photo"
          src={PortfolioPhoto}
          alt="Profile Pic"
        />
        <div className="profile-text">
          <h3>Who am I? </h3>
          <p>
            I am a Full-stack Developer in Charleston, South Carolina. I am
            passionate about designing clean, beautiful websites. Beauty is
            something we can reflect and cultivate and that is what I long to do
            as a developer.
          </p>
          <hr />
          <div className="contact-information">
            <div>
              <h4>Name: Ben Patton</h4>
              <h4>
                Email: <span className="email">bass41992ben@gmail.com</span>
              </h4>
            </div>
            <h4>From: South Carolina, US</h4>
          </div>
        </div>
      </div>
      <div className="skills-container">
        <div className="skills-text">
          <h1>Programming Skills</h1>
          <div>
            I am Javascript Developer focusing on building Web Applications with
            HTML, CSS, React, Node JS, MySql, Amazon Web Services. Skilled in
            solving problems and making clean applications that provide an
            awesome user interface/experience.{" "}
          </div>
        </div>
        <div className="Aboutme-Content-Container">
          <div className="logo">
            <img className="Logos html" src={Html} alt="HTML" />
            <div className="logo-text">
              <h3>HTML</h3>
              <div>
                I use HTML in conjunction with CSS and Javascript to build
                awesome frontends for websites. Check out my frontend work in my
                projects below.
              </div>
            </div>
          </div>
          <div className="logo">
            <img className="Logos css" src={Css} alt="CSS" />
            <div className="logo-text">
              <h3>CSS</h3>
              <div>
                I use CSS for all the fun styling on my frontend Websites. The
                possibilities are limitless.{" "}
              </div>
            </div>
          </div>
          <div className="logo">
            <img
              className="Logos javascript"
              src={Javascript}
              alt="javascript"
            />
            <div className="logo-text">
              <h3>Javascript</h3>
              <div>
                From functionality to interactivity, I use Javascript makes the
                web come to life. Javascript is the third puzzle piece along
                with HTML and CSS for frontend developement
              </div>
            </div>
          </div>
          <div className="logo">
            <img className="Logos react" src={ReactLogo} alt="React Logo" />
            <div className="logo-text">
              <h3>React</h3>
              <div>
                I use React, as React's website says, 'as a library for building
                user interfaces.' React allows for simplie construction of
                websites! It is the library this portfolio uses 😎{" "}
              </div>
            </div>
          </div>
          <div className="logo">
            <img className="Logos node" src={Node} alt="Node Js" />
            <div className="logo-text">
              <h3>Node JS</h3>
              <div>
                I use Node Js for all backend development. Node Js allows me to
                build fullstack web applications with the ability to communicate
                to databases.
              </div>
            </div>
          </div>
          <div className="logo">
            <img className="Logos mysql" src={MySql} alt="My Sql" />
            <div className="logo-text">
              <h3>MySql - Data Managment</h3>
              <div>
                I use MySql in combination with AWS for data creation, retrieval
                and management.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
