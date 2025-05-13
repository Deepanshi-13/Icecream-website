import React from "react";
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2>Contact Us</h2>
        <p>Have questions or feedback? We'd love to hear from you!</p>
        <form className="contact-form">
          <label>Name</label>
          <input type="text" id="name" placeholder="Your Name" required />

          <label>Email</label>
          <input type="email" id="email" placeholder="Your Email" required />

          <label>Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
