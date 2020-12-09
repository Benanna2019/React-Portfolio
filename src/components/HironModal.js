import React from "react";
import ReactDom from "react-dom";
import "../styles/modal.css";

export default function BlogModal({ open, onClose, children }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="hiron-overlay-styles" />
      <div className="hiron-modal-styles">
        <div className="hiron-modal-close-btn-container">
          <button className="hiron-close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div>{children}</div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
