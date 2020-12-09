import React from "react";
import ReactDom from "react-dom";
import "../styles/modal.css";

export default function BlogModal({ open, onClose, children }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="blog-overlay-styles" />
      <div className="blog-modal-styles">
        <div className="blog-modal-close-btn-container">
          <button className="blog-close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div>{children}</div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
