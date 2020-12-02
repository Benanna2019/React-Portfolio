import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/landingcomp.css";

gsap.registerPlugin(ScrollTrigger);

export default function LandingComponent() {
  let intro = useRef(null);
  let hover = useRef(null);
  useEffect(() => {
    textIntro(intro);
    warpBackground(hover);
  }, []);

  const textIntro = (elem) => {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        toggleActions: "restart pause resume none",
      },
      xPercent: -20,
      opacity: 0,
      stagger: 0.2,
      duration: 2,
      delay: 3,
      scale: -1,
      ease: "back",
    });
  };
  const name = "Ben Patton";

  //interactive background with gsap

  // Define an object that will be used to draw plus signs
  const warpBackground = (id) => {
    let Plus = function () {
      this.x = 0;
      this.y = 0;

      this.top = 0;
      this.left = 0;

      this.height = 0;
      this.width = 0;
      this.scale = 1;
    };

    //Add draw method to the object
    Plus.prototype.draw = function (ctx, x, y) {
      ctx.save();
      ctx.beginPath();
      ctx.setTransform(
        this.scale,
        0,
        0,
        this.scale,
        this.left + this.x,
        this.top + this.y
      );
      ctx.lineWidth = 2;

      ctx.moveTo(0, -this.height / 2);
      ctx.lineTo(0, this.height / 2);

      ctx.moveTo(-this.width / 2, 0);
      ctx.lineTo(this.width / 2, 0);

      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    };

    let c = document.getElementById("c");
    let context = c.getContext("2d");
    let signs = [];
    let mouse = { x: 0, y: 0 };
    let gridLength = 9;
    let mouseOver = false;
    let mouseMoved = false;

    c.width = window.innerWidth;
    c.height = window.innerHeight;

    // Create sign grid using 2D array
    for (let i = 0; i < gridLength; i++) {
      signs[i] = [];
      for (let j = 0; j < gridLength; j++) {
        let min = Math.min(c.width, c.height);
        signs[i][j] = new Plus();
        signs[i][j].left = (c.width / (gridLength + 1)) * (i + 1);
        signs[i][j].top = (c.height / (gridLength + 1)) * (j + 1);
        signs[i][j].width = min / 50;
        signs[i][j].height = min / 50;
      }
    }

    // Use GSAP ticker to call draw function on every frame that will draw signs to the canvas
    // You can use requestAnimationFrame as well
    gsap.ticker.add(draw);

    function draw() {
      context.clearRect(0, 0, c.width, c.height);

      if (mouseOver && mouseMoved) {
        calculateSigns();
        mouseMoved = false;
      }

      for (let i = 0; i < gridLength; i++) {
        for (let j = 0; j < gridLength; j++) {
          let sign = signs[i][j];
          sign.draw(context);
        }
      }
    }

    function calculateSigns() {
      for (let i = 0; i < gridLength; i++) {
        for (let j = 0; j < gridLength; j++) {
          let sign = signs[i][j];
          let hyp = Math.min(c.width, c.height) / (gridLength + 1) / 2;
          let d = dist([sign.left, sign.top], [mouse.x, mouse.y]);
          let ax = mouse.x - sign.left;
          let ay = mouse.y - sign.top;
          let angle = Math.atan2(ay, ax);
          if (d < hyp + sign.width) {
            hyp = d;
            gsap.to(sign, 0.3, { scale: 2 });
          } else {
            gsap.to(sign, 0.3, { scale: 1 });
          }

          gsap.to(sign, 0.3, {
            x: Math.cos(angle) * hyp,
            y: Math.sin(angle) * hyp,
          });
        }
      }
    }

    c.addEventListener("mousemove", mouseMove);
    c.addEventListener("touchmove", mouseMove);

    function mouseMove(e) {
      if (e.targetTouches && e.targetTouches[0]) {
        e = e.targetTouches[0];
      }
      let rect = c.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouseMoved = true;
    }

    c.addEventListener("mouseenter", function () {
      mouseOver = true;
    });

    c.addEventListener("touchstart", function (e) {
      mouseOver = true;
      mouseMove(e);
    });

    c.addEventListener("mouseleave", mouseLeave);
    c.addEventListener("touchend", mouseLeave);

    function mouseLeave() {
      mouseOver = false;

      for (let i = 0; i < gridLength; i++) {
        for (let j = 0; j < gridLength; j++) {
          let sign = signs[i][j];
          if (!mouseOver) {
            gsap.to(sign, 0.3, { x: 0, y: 0, scale: 1 });
          }
        }
      }
    }

    window.addEventListener("resize", function () {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      for (let i = 0; i < gridLength; i++) {
        for (let j = 0; j < gridLength; j++) {
          let min = Math.min(c.width, c.height);
          let sign = signs[i][j];
          sign.left = (c.width / (gridLength + 1)) * (i + 1);
          sign.top = (c.height / (gridLength + 1)) * (j + 1);
          sign.width = min / 50;
          sign.height = min / 50;
        }
      }
    });

    function dist([x1, y1], [x2, y2]) {
      let dx = x1 - x2;
      let dy = y1 - y2;
      return Math.sqrt(dx * dx + dy * dy) || 1;
    }
  };

  return (
    <div className="Landing-Container">
      <div className="canvas">
        <canvas id="c" width="500px" height="500px"></canvas>
      </div>
      <div className="text-container">
        <h1 className="intro" ref={(el) => (intro = el)}>
          Hello, I'm<span className="highlight">{name}</span>.
          <div>I am a full-stack software developer.</div>
        </h1>
      </div>
    </div>
  );
}
