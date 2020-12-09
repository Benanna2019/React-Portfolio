import React, { useState } from "react";
import Modal from "./Modal";
import BlogModal from "./BlogModal";
import HironModal from "./HironModal";
import CCLogo from "../images/componentscart.png";
import Hiron from "../images/hiron.png";
import Study from "../images/color-study.png";
import "../styles/projects.css";

export default function MyProjects() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const [chosen, setChosen] = useState(false);
  return (
    <div className="projects-container" id="projects">
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
          <button className="prjctbtns" onClick={() => setIsOpen(true)}>
            <div></div>
          </button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="compcartModal">
              <img
                className="CCModal-img"
                src={CCLogo}
                alt="Components Cart Logo"
              />
              <h3>Components Cart</h3>
              <div className="CCText">
                <p>
                  Components Cart is our Group Capstone Project from my Software
                  Engineering Immersive at{" "}
                  <a
                    href="https://www.harborec.com/jrs-coding-school/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Jack Russell Coding School.
                  </a>{" "}
                  Throughout the Immersive we recongized that there were many
                  different components that we were using in most of our apps
                  (i.e. Sign In, Sign Up and Confirm Sign Up Components).
                </p>
                <p>
                  Components Cart is our answer to this problem. Open source,
                  Components Cart serves as component library where you can
                  share code, copy code, follow users and contribute to the
                  development of the website. Go{" "}
                  <a
                    href="http://test-cohort-5-group-cohortfive.s3-website-us-east-1.amazonaws.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </a>{" "}
                  to check it out and sign up!
                </p>
              </div>
            </div>
          </Modal>
        </div>
        <div className="card card-2">
          <div className="cover">
            <img className="img hiron" src={Hiron} alt="Hiron Logo" />
            <p></p>
          </div>
          <button className="prjctbtns" onClick={() => setSelected(true)}>
            <div></div>
          </button>
          <HironModal open={selected} onClose={() => setSelected(false)}>
            <div className="hironModal">
              <img className="HironModal-img" src={Hiron} alt="Hiron Logo" />
              <h3>Hiron - A Software Guarian for Your Invoices</h3>
              <div className="HironText">
                <p>
                  As my individual capstone project for{" "}
                  <a
                    href="https://www.harborec.com/jrs-coding-school/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Jack Russell Coding School.
                  </a>{" "}
                  I took the idea from my dad who has owned his own business for
                  the better part of 30yrs. As advice from the folks at{" "}
                  <a
                    href="https://www.coderfoundry.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Coder Foundry
                  </a>{" "}
                  I wanted to build a business level project.
                </p>
                <p>
                  My dad has been using Microsoft Works, STOP! Read that again.
                  Microsoft WORKS I said. Ok, continue. My dad has been reading
                  Microsoft Works to manage and send Invoices. And here is the
                  thing. The program works well. It is on a 2004 Dell but it
                  still works.
                </p>
                <p>
                  So, my aim was to build a piece of software that runs as
                  smoothly as Microsoft Works did, or in my dads case, 'does',
                  and make creating, storing and retrieving invoices an
                  abstracted yet intuitive process.
                </p>
                <h4>Enter HIRON!</h4>
                <p>
                  Taking a page out of Palantir's book, I created the name Hiron
                  from elvish words. The subtitle of the website gives the
                  simplest most concise explanation of its meaning. 'A Software
                  Guardian for Your Invoices.'{" "}
                </p>
                <p>
                  Unfortunately, Hiron is not live yet. My aim is to have it
                  live by the end of January. So be on the lookout! I am excited
                  for it.
                </p>
              </div>
            </div>
          </HironModal>
        </div>
        <div className="card card-3">
          <div className="cover">
            <img className="img study" src={Study} alt="Study Logo" />
            <p></p>
          </div>
          <button className="prjctbtns" onClick={() => setChosen(true)}>
            <div></div>
          </button>
          <BlogModal open={chosen} onClose={() => setChosen(false)}>
            <div className="blogModal">
              <img className="BlogModal-img" src={Study} alt="Blog Logo" />
              <h3
                onClick={() =>
                  window.open("https://next-js-blog-xi.vercel.app/", "_blank")
                }
              >
                Henneth Annun Tavern
              </h3>
              <div className="BlogText">
                <p>
                  One thing I have always loved is writing. I do not know what
                  it is but writing is fun to me. I enjoy musing about things,
                  thinking deeply about others, and sharing insights/cool things
                  I have been learning.
                </p>
                <p>
                  My blog site,{" "}
                  <a
                    href="https://next-js-blog-xi.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Henneth Annun Tavern,
                  </a>{" "}
                  also gets its name from Lord of the Rings. Henneth Annun is a
                  place of refuge for rangers. I am fascinated with the idea of
                  refuge and and want my blog to be that place, not only for me
                  to write, but for others to come, read, think, grow and feel
                  the freedom to talk over things written.
                </p>
                <p>
                  I spend my time writing about anything really. Coding related
                  topics, deep thoughts, Philosophy, Theology, etc. Feel free to
                  check it out.
                </p>
              </div>
            </div>
          </BlogModal>
        </div>
      </div>
    </div>
  );
}
