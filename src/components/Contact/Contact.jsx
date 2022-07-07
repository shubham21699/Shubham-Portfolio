import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Contact = () => {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return (
      <MuiAlert
        elevation={6}
        ref={ref}
        variant="filled"
        vertical="top"
        horizontal="center"
        {...props}
      />
    );
  });

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_i6ytjhi",
      "template_o6zh8ul",
      form.current,
      "eZ7HFs3Tm9PCaamVi"
    );

    handleClick();
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>{"<CONTACT ME />"}</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail size={30} />
            <h4>Send Email To</h4>
            <h5>
              Personal ID : {" "}
              <a href="mailto:shubham21699@gmail.com" className="emailTag">
                <i>shubham21699@gmail.com</i>
              </a>
            </h5>
            <h5>
              College ID : {" "}
              <a href="mailto:sgoel3_be19@thapar.edu" className="emailTag">
                <i>sgoel3_be19@thapar.edu</i>
              </a>
            </h5>
          </article>
          <article className="contact__option">
            <BsWhatsapp size={30} />
            <h4>Mobile Number</h4>
            <h5>
              <i>{"(+91) 9855900606"}</i>{" "}
            </h5>
            <a href="https://wa.me/+919855900606" target="_blank">
              <i>Send Message on WhatsApp</i>
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
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
          <Snackbar
            open={open}
            autoHideDuration={2000}
            anchorOrigin={{
              horizontal: "right",
              vertical: "top",
            }}
            onClose={handleClose}
          >
            <Alert severity="success" sx={{ width: "100%" }}>
              Message sent successfully!
            </Alert>
          </Snackbar>
        </form>
      </div>
    </section>
  );
};

export default Contact;
