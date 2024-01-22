"use client";
import React, { useState } from "react";

const Page = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const sended = { firstName, secondName, email, message };
    console.log(sended);
  };

  return (
    <div className="about-container">
      <div className="kontakty">
        <h2 className="h2-site">Kontakty:</h2>

        <p>
          Mobil: <span>+420 587 855 225</span>
        </p>
        <p>
          Email: <span>pizza@matej.cz</span>
        </p>
        <p>
          Pevná Linka: <span>+420 587 855 225</span>
        </p>
        <p>
          Reklamace: <span>reklamace@matej.cz</span>
        </p>
      </div>
      <div className="mapa">
        <h2 className="h2-site">Kde nás najdete:</h2>
        <p>Praha 85, Matějova ulice 15/2</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.8053292825293!2d16.14384587691483!3d50.40746549045738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e65228f5dd7c3%3A0x14aa3835851587a2!2sAutoservis%20N%C3%A1chod!5e0!3m2!1scs!2scz!4v1705837329283!5m2!1scs!2scz"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="formular">
        <h2 className="h2-site">Kontaktní formulář:</h2>
        <form
          className="flex flex-col h-full"
          onSubmit={handleSubmit}
          action=""
        >
          <div className="jp">
            <input
              type="text"
              placeholder="Jméno"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Příjmení"
              required
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
            />
          </div>
          <div className="ea">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              id="txt"
              placeholder="Dobrý den, ..."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {/*<p>{firstName}</p>*/}
          {/*<p>{secondName}</p>*/}
          {/*<p>{email}</p>*/}
          {/*<p>{message}</p>*/}
          <div className="button">
            <button className="submit-btn">Odeslat</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
