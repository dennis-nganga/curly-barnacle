import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    send: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    const key = event.target.id;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setFormData({
      ...formData,
      [key]: value,
    });
  }
  console.log(formData);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oocoaqc",
        "template_gealfsg",
        e.target, //should be the HTML form element
        "6I6J2_uJHt_oM1rJw"
      )
      .then(
        (result) => {
          console.log("Email sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            send: true,
          });
          // Optionally, you can navigate to a different page instead of reloading
          window.location.reload(); // This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log("Error sending email:", error.text);
        }
      );
  }

  //    <>
  //    PLEASE TRYAGAIN LATER</>

  return (
    <div className="contact__form-wrapper">
      {/* <form className="contact__form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input
          id="name"
          placeholder="Your name"
          type="text"
          name="from_name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          id="email"
          type="email"
          name="from_email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Subject</label>
        <input
          id="subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <label>Message</label>
        <textarea
          id="message"
          name="html_message"
          value={formData.message}
          onChange={handleChange}
        />

        <input
          id="send-btn"
          type="submit"
          value="Send"
          onClick={sendEmail}
          disabled={!formData.name || !formData.email || !formData.message}
        />
      </form> */}
      <div className="contact-links-wrapper">
        <h4>Contacts</h4>
        <div className="gitlink">
          <a href="https://github.com/dennis-nganga">
        
            GitHub <FaGithub />
          </a>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/dennis-nganga-042968265/">
            LinkedIn
            <FaLinkedinIn />
          </a>
        </div>
        <div className="email-address">
          <h5>denniskimani416@gmail.com</h5>
        </div>
      </div>
    </div>
  );
}
