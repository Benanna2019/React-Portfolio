import React from "react";
import CCLogo from "../images/componentscart.png";
import Hiron from "../images/hiron.png";
import Study from "../images/color-study.png";
import "../styles/projects.css";

export default function MyProjects() {
  return (
    <div className="projects-container">
      <h1 className="heading">PROJECTS</h1>
      <hr />
      <div className="cards-container">
        <div className="card card-1">
          <div className="cover">
            <img
              className="img compcart"
              src={CCLogo}
              alt="components cart logo"
            />
            <p></p>
          </div>
          <button className="prjctbtns">
            <div></div>
          </button>
        </div>
        <div className="card card-2">
          <div className="cover">
            <img className="img hiron" src={Hiron} alt="Hiron Logo" />
            <p></p>
          </div>
          <button className="prjctbtns">
            <div></div>
          </button>
        </div>
        <div className="card card-3">
          <div className="cover">
            <img className="img study" src={Study} alt="Study Logo" />
            <p></p>
          </div>
          <button className="prjctbtns">
            <div></div>
          </button>
        </div>
      </div>
    </div>
  );
}
