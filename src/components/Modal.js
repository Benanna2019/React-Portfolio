import React from "react";
import ReactDom from "react-dom";
import "../styles/modal.css";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay-styles" />
      <div className="modal-styles">
        <div className="modal-close-btn-container">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div>{children}</div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
