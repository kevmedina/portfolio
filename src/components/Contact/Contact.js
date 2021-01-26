import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <section>
        {/* Contact Form */}
        <div>
          <h3>Contact Me!</h3>

          <form>
            <div>
              <label htmlFor="name"></label>
              <input name="name" type="text" placeholder="Name" />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input name="email" type="text" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="subject"></label>
              <input name="subject" type="text" placeholder="Subject" />
            </div>
            <div>
              <label htmlFor="email"></label>
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
        </div>

        {/* contact info */}
        <div className="contact-info">
          <div>
            <p>EMAIL: kmedinakm@hotmail.com</p>
            <p>PHONE: (954) 258-0134</p>
          </div>

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
        </div>
      </section>
    </div>
  );
};

export default Contact;
