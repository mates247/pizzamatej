import React from "react";
import { RiInstagramLine, RiTwitterLine, RiFacebookLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socials">
        <a href="">
          <RiInstagramLine className="socials-logo" />
        </a>
        <a href="">
          <RiTwitterLine className="socials-logo" />
        </a>
        <a href="">
          <RiFacebookLine className="socials-logo" />
        </a>
      </div>
      <div className="contacts">
        <h1>PizzaMatěj.cz</h1>
        <p>
          IČO: <span>CZ985284</span>
        </p>
        <p>
          Adresa: <span>Náchod 35, 580 00</span>
        </p>
        <p>
          Telefon: <span>+420 755 843 258</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
