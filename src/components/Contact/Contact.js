import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Contact Form */}
      <section className="contact-form-container">
        <h3>Contact Me!</h3>
        <p>For all inquires, please email me using the form below.</p>

        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input name="email" type="text" />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input name="subject" type="text" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Please share your ideas here..."
              rows="6"
              cols="6"
              name="message"
              required
            ></textarea>
          </div>

          <button>SEND MESSAGE</button>
        </form>
      </section>

      {/* contact info */}
      <section className="contact-info-container">
        <div>
          <h5>Email</h5>
          <p>
            <i class="fas fa-envelope"> kmedinakm@hotmail.com</i>
          </p>
        </div>

        <div>
          <h5>Phone</h5>
          <p>
            <i class="fas fa-phone"> (954) 258-0134</i>
          </p>
        </div>

        <div>
          <h5>Social Media</h5>
          <a href="www.google.com">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="www.github.com">
            <i class="fab fa-github"></i>
          </a>
          <a href="www.codepen.com">
            <i class="fab fa-codepen"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
