import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import Footer from "../component/Footer/Footer";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    emailjs
      .sendForm(
        "service_q7j4y2j",        //  main email service ID
        "template_x4ptyvg",       //  admin template ID
        form,
        "KhE6rq4qrWp5mfH2L"       //  public key
      )
      .then(
        (result) => {
          // Send auto-reply to user
          emailjs.send(
            "service_q7j4y2j",     
            "template_3taunfi", 
            {
              name: form.name.value,
              email: form.email.value,
              message: form.message.value,
            },
            "KhE6rq4qrWp5mfH2L"
          );

          toast.success("Message sent successfully!");
          form.reset();
          setLoading(false);
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <>
      <section className="contact-section">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Have questions or feedback? We'd love to hear from you!</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" placeholder="Your Name" required />

            <label>Email</label>
            <input type="email" name="email" placeholder="Your Email" required />

            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          <ToastContainer position="top-center" />
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Contact;
