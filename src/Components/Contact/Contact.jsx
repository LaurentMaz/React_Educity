import React from "react";

import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import "./Contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tenetur
          vel consequuntur. Error, recusandae dolor!
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            contact@laurentmazoyer.fr
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +33 06 09 15 19 08
          </li>
          <li>
            <img src={location_icon} alt="" />
            Adresse postale 38780 Rhône Alpes
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
