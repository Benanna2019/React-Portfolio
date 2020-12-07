import React from "react";
import emailjs from "emailjs-com";
import "../styles/contactme.css";

const onSubmit = (e) => {
  e.preventDefault(); // Prevents default refresh by the browser
  emailjs
    .sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_USER_ID
    )
    .then(
      (result) => {
        alert("Message Sent, I'll get back to you shortly", result.text);
      },
      (error) => {
        alert("An error occured, Plese try again", error.text);
      }
    );
};

export default function ContactMe() {
  return (
    <div className="contact-me-container">
      <h1 className="contact-heading">Contact Me</h1>
      <hr className="contact-hr" />
      <form className="form" onSubmit={onSubmit}>
        <p>Your Name:</p>
        <input
          name="name"
          type="text"
          placeholder="name…"
          className="form__input"
          required
        />
        <p>Subject:</p>
        <input
          name="subject"
          type="text"
          placeholder="Subject…"
          className="form__input"
          required
        />
        <p>Email:</p>
        <input
          name="reply_to"
          type="text"
          placeholder="Your email..."
          className="form-email"
          required
        />
        <div className="message-container">
          <p>Your Message:</p>
          <textarea
            name="message"
            type="text"
            placeholder="Your Message…"
            className="form-message"
            required
            rows="8"
            cols="60"
          ></textarea>
          <button className="form-button">Send Message</button>
        </div>
      </form>
    </div>
  );
}
