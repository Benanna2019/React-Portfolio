import React, { useRef, useEffect } from "react";
import "../styles/lines.css";

export default function Lines() {
  const canvas = useRef();
  let ctx = null;

  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = canvas.clientWidth;
    canvasEle.height = canvasEle.clientHeight;

    //context of the canvas
    ctx = canvasEle.getContext("2d");
  }, []);

  useEffect(() => {
    drawLine({ x: 20, y: 20, x1: 20, y1: 100 });
    drawLine({ x: 50, y: 50, x1: 200, y1: 100 }, { color: "red" });
    drawLine({ x: 300, y: 250, x1: 260, y1: 70 }, { color: "green" });
    drawLine({ x: 70, y: 240, x1: 160, y1: 120 }, { color: "blue" });
  }, []);

  const drawLine = (info, style = {}) => {
    const { x, y, x1, y1 } = info;
    const { color = "black", width = 1 } = style;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
  };

  return (
    <div>
      <h3>Draw a line on Canvas</h3>
      <canvas ref={canvas}></canvas>
    </div>
  );
}
