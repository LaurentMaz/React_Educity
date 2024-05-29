import React, { useRef, useState } from "react";

import white_arrow from "../../assets/white-arrow.png";
import "./Contact.css";

const ContactForm = () => {
  const [result, setResult] = useState("");

  const submitRef = useRef();
  const web3formsApiKey = import.meta.env.VITE_WEB3FORMS_API_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    submitRef.current.disabled = true;
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", web3formsApiKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email send Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Your name</label>
        <input type="text" name="name" placeholder="Enter your name" required />
        <label htmlFor="phone">Phone number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your mobile number"
          required
        />
        <label htmlFor="message">Write your message</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Enter your message here"
          required
        ></textarea>
        <button ref={submitRef} type="submit" className="btn dark-btn">
          Envoyer <img src={white_arrow} alt="" />
        </button>
      </form>
      <span>{result}</span>
    </>
  );
};

export default ContactForm;
