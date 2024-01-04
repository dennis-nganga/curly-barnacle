import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    send:false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
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
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_oocoaqc",
        "template_gealfsg",
        e.target,
        "6I6J2_uJHt_oM1rJw"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  //    <>
  //    PLEASE TRYAGAIN LATER</>

  return (
    <div className="contact__form-wrapper">
      <form className="contact__form" onSubmit={sendEmail}>
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
          value={formData.email}
          onChange={handleChange}
        />
        {/* hidden the send btn until event and state are implemented */}
        <input
          id="send-btn"
          type="button"
          value="Send"
          onClick={formData.send}
          onChange={handleChange}
        />
      </form>
      <div className="gitlink">
        <a href="https://github.com/dennis-nganga">Github</a>
      </div>
      <div className="linkedin">
        <a href="https://www.linkedin.com/in/dennis-nganga-042968265/">
          Linked in
        </a>
      </div>
    </div>
  );
}
