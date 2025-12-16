import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Footer.css";

const Footer = () => {
  const formRef = useRef();
  const [statusMsg, setStatusMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMsg("Sending...");

    emailjs
      .sendForm(
        "service_jzhwfei",     // ✔ your service ID
        "template_3mopfva",    // ✔ your template ID
        formRef.current,
        "jVU2lQlMhBT6eiNjo"    // ✔ your public key
      )
      .then(
        () => {
          setStatusMsg("Message sent successfully! 🚀");
          e.target.reset();
        },
        () => {
          setStatusMsg("Failed to send message. Try again.");
        }
      );
  };

  return (
    <footer className="ft-footer">
      <div className="ft-container">
        <div className="ft-grid">

          {/* LEFT SECTION */}
          <div className="ft-left-section">
            <div>
              <h3 className="ft-heading">Let's Work Together</h3>
              <p className="ft-subtitle">Have a project in mind? Drop me a message!</p>
            </div>

            <div className="ft-contact-cards">

              {/* EMAIL */}
              <a href="mailto:sachinnagar8662@gmail.com" className="ft-contact-card">
                <div className="ft-icon-wrapper">
                  <svg className="ft-icon" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>

                <div className="ft-contact-info">
                  <p className="ft-contact-label">Email Address</p>
                  <p className="ft-contact-value">sachinnagar8662@gmail.com</p>
                </div>

                <svg className="ft-arrow-icon ft-icon" viewBox="0 0 24 24">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>

              {/* PHONE */}
              <a href="tel:+918875XXXXXX" className="ft-contact-card">
                <div className="ft-icon-wrapper">
                  <svg className="ft-icon" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>

                <div className="ft-contact-info">
                  <p className="ft-contact-label">Phone Number</p>
                  <p className="ft-contact-value">+91 8875XXXXXX</p>
                </div>

                <svg className="ft-arrow-icon ft-icon" viewBox="0 0 24 24">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>

              {/* SOCIAL LINKS */}
              <div className="ft-social-links">
                <a href="https://github.com/SachinNagar03" target="_blank" rel="noopener noreferrer" className="ft-social-link">
                  <svg className="ft-icon" viewBox="0 0 24 24">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>

                <a href="https://www.linkedin.com/in/sachin-nagar-05APR2002/" target="_blank" rel="noopener noreferrer" className="ft-social-link">
                  <svg className="ft-icon" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>

                {/* <a href="#" className="ft-social-link">
                  <svg className="ft-icon" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 7 7v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a> */}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION – FORM */}
          <div className="ft-form-section">
            <form ref={formRef} onSubmit={sendEmail} className="ft-form">

              <div className="ft-form-row">
                <input name="user_name" type="text" placeholder="Name" required />
                <input name="user_email" type="email" placeholder="Email" required />
              </div>

              <input name="subject" type="text" placeholder="Subject" required />

              <textarea name="message" placeholder="Message" required></textarea>

              <button type="submit" className="ft-submit-btn">
                Send Message
              </button>

              {statusMsg && <p className="ft-status">{statusMsg}</p>}
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
