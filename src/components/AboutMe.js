import React, { useEffect, useRef } from "react";
import "../styles/aboutme.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Javascript from "../images/iconfinder_187_Js_logo_logos_4373213.png";
import Css from "../images/iconfinder_badge-css-3_317756.png";
import Html from "../images/iconfinder_badge-html-5_317755.png";
import MySql from "../images/iconfinder_MySQL_1012821.png";
import Node from "../images/iconfinder_nodejs-new-black_1012819.png";
import ReactLogo from "../images/iconfinder_React.js_logo_1174949.png";
import PortfolioPhoto from "../images/PorfolioPhoto.png";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 16,
  },
}))(Tooltip);

export default function AboutMe() {
  return (
    <div className="Aboutme-Container">
      <div className="profile-section">
        <img className="portfolio-photo" src={PortfolioPhoto} alt="Photo" />
        <div className="profile-text">
          <h3>Who am I? </h3>
          <p>
            I am a Full-stack Developer in Charleston, South Carolina. I am
            passionate about designing clean, beautiful websites. Beauty is
            something we can reflect and cultivate and that is what I long to do
            as a developer.
          </p>
        </div>
      </div>

      <div className="skills-container">
        <h1>Programming Skills</h1>

        <div className="Aboutme-Content-Container">
          <div className="card">
            <LightTooltip title="Html">
              <img className="Logos html" src={Html} alt="HTML" />
              {/* <h2>HTML</h2> */}
            </LightTooltip>
          </div>
          <div className="card">
            <LightTooltip title="Css">
              <img className="Logos css" src={Css} alt="CSS" />
              {/* <h2>CSS</h2> */}
            </LightTooltip>
          </div>
          <div className="card">
            <LightTooltip title="Javascript">
              <img
                className="Logos javascript"
                src={Javascript}
                alt="javascript"
              />
              {/* <h2>Javascript</h2> */}
            </LightTooltip>
          </div>
          <div className="card">
            <LightTooltip title="React">
              <img className="Logos react" src={ReactLogo} alt="React Logo" />
              {/* <h2>React JS</h2> */}
            </LightTooltip>
          </div>
          <div className="card">
            <LightTooltip title="Node JS">
              <img className="Logos node" src={Node} alt="Node Js" />
              {/* <h2>Node JS</h2> */}
            </LightTooltip>
          </div>
          <div className="card">
            <LightTooltip title="MySql - Data Managment">
              <img className="Logos mysql" src={MySql} alt="My Sql" />
            </LightTooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
