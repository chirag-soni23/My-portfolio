// Contact.jsx
import React from 'react';
import '../Stylesheet/Contact.css';
const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-description">
            Have a question or want to work together? Feel free to reach out!
          </p>
          <form className="contact-form">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
