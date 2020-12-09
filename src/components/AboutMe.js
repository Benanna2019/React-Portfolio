import React from "react";
import { Link } from "react-scroll";
import "../styles/aboutme.css";
import GSAPLogo from "../images/gsaplogo.png";
import AWSLogo from "../images/awslogo.png";
import FullstackLogo from "../images/fullstack-logo.png";
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
                <Link to="contact" smooth={true} duration={500}>
                  Email: <span className="email">bass41992ben@gmail.com</span>
                </Link>
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
            <img
              className="Logos frontend"
              src={FullstackLogo}
              alt="Frontend Dev Logo"
            />
            <div className="logo-text">
              <h3>Frontend Development</h3>
              <div>
                I use HTML, CSS and Javascript to build awesome frontends for
                websites. Check out my frontend work in my projects below.
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
            <img
              className="Logos aws"
              src={AWSLogo}
              alt="Amazon Web Services"
            />
            <div className="logo-text">
              <h3>Amazon Web Service</h3>
              <div>
                I use Amazon Web Services for security and authentication as
                well as database hosting and Lambdas to make production quick
                and secure.{" "}
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
                and management/hosting.
              </div>
            </div>
          </div>
          <div className="logo">
            <img
              className="Logos greensock"
              src={GSAPLogo}
              alt="Greensock Animation"
              onClick={() => window.open("https://greensock.com/", "_blank")}
            />
            <div className="logo-text">
              <h3 className="greensock-logo">Greensock</h3>
              <div>
                I use Greensock because it is an awesome library for making
                animations. Check out the animation below, you can't miss it 😏
                . Click the logo above to go to their website.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
