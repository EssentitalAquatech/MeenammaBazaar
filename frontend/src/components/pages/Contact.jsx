import React, { useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".contact-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="contact-container container py-5">

      <h1 className="contact-main-title contact-animate contact-fade-down">
        Contact <span className="contact-highlight">Us</span>
      </h1>

      <p className="contact-sub-title contact-animate contact-fade-left">
        We are always ready to help you. Reach us anytime via below options.
      </p>

      {/* CARDS */}
      <div className="row g-4 mt-4">

        {/* WHATSAPP */}
        <div className="col-md-3 col-sm-6 contact-animate contact-fade-up">
          <div className="contact-card contact-card1">
            <i className="fa-brands fa-whatsapp contact-icon"></i>
            <h5>WhatsApp Chatbot</h5>
            <p>Chat instantly for quick help & support.</p>

          <a
  href="https://wa.me/919046226703"
  target="_blank"
  rel="noreferrer"
  className="contact-link-btn"
>
  Click here
</a>
          </div>
        </div>

        {/* CALL */}
        <div className="col-md-3 col-sm-6 contact-animate contact-fade-right">
          <div className="contact-card contact-card2">
            <i className="fa-solid fa-phone contact-icon"></i>
            <h5>Call Us</h5>
            <p>Talk directly with our support team.</p>

            <a href="tel:+918000000000" className="contact-link-btn">
              +91 9046226703
            </a>
          </div>
        </div>

        {/* EMAIL */}
        <div className="col-md-3 col-sm-6 contact-animate contact-fade-left">
          <div className="contact-card contact-card3">
            <i className="fa-solid fa-envelope contact-icon"></i>
            <h5>Email Us</h5>
            <p>Send your queries via email anytime.</p>

            <a
              href="mailto:24x7@essentialaquatech.com"
              className="contact-link-btn"
            >
              24x7@essentialaquatech.com
            </a>
          </div>
        </div>

        {/* OFFICE */}
     <div className="col-md-3 col-sm-6 contact-animate contact-fade-down">
  <div className="contact-card contact-card4">
    <i className="fa-solid fa-building contact-icon"></i>
    <h5>Our Office</h5>
    <p>Visit us for direct consultation.</p>

    <a
      href="https://maps.app.goo.gl/XFM2sL69HL8UTqqu8?g_st=aw"
      target="_blank"
      rel="noreferrer"
      className="contact-link-btn"
    >
      Location
    </a>
  </div>
</div>

      </div>

      {/* FORM */}
      <div className="contact-form-box mt-5 contact-animate contact-fade-up">

        <h3>Send Us a Message</h3>

        <form className="contact-form">

          <input type="text" placeholder="Your Name" className="contact-input" />
          <input type="text" placeholder="Phone Number" className="contact-input" />

          <textarea
            placeholder="Your Message"
            className="contact-textarea"
          ></textarea>

          <button type="submit" className="contact-btn">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
};

export default Contact;