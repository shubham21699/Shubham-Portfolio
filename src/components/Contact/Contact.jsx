import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>{"<CONTACT ME />"}</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail size={30} />
            <h4>Email</h4>
            <h5>Personal ID : shubham21699@gmail.com</h5>
            <h5>College ID : sgoel3_be19@thapar.edu</h5>
            <a href="mailto:shubham21699@gmail.com">
              <i>Send me Email</i>
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp size={30} />
            <h4>Mobile Number</h4>
            <h5>{"(+91) 9855900606"}</h5>
            <a href="https://wa.me/+919855900606" target="_blank">
              <i>Send Message on WhatsApp</i>
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Type Your Message Here."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
