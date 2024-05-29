import React, { useState } from "react";
import "../Stylesheet/Contact.css";
import swal from "sweetalert";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        swal("Success Message Title", "Message Successfully Sent", "success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        swal("Oops!", "Failed to Send message", "error");
      }
    } catch (error) {
      swal("Oops!", "Failed to Send message", "error");
      setFormData({ name: "", email: "", message: "" });
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">Contact Me</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Your Message:</label>
            <textarea
            rows={4}
            cols={50}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
