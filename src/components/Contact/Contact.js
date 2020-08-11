import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact</h1>

      <section>
        {/* Contact Form */}
        <form>
          <div>
            <label htmlFor="firstName"></label>
            <input name="firstName" type="text" placeholder="First Name" />
          </div>
          <div>
            <label htmlFor="lastName"></label>
            <input name="lastName" type="text" placeholder="Last Name" />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input name="email" type="text" placeholder="Email address" />
          </div>
          <button>SEND</button>
        </form>

        {/* Social Media Links */}
        <div>
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
