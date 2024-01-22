"use client";
import React, { useState } from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
// import { Link } from "react-router-dom";
import Link from "next/link";

const Navigation = () => {
  /*navigace zobrazení responsivní*/
  const [openLinks, setOpenLinks] = useState(false);

  const toogle = () => {
    setOpenLinks(!openLinks);
  };

  React.useEffect(() => {
    const resize = () => {
      setOpenLinks(false);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  /*navigace zobrazení responsivní*/

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img
          src="/pizzaLogo.png"
          id={openLinks ? "close" : "open"}
          alt="logo"
        />
        <div
          className="sm:hidden whitespace-nowrap"
          id={openLinks ? "open" : "close"}
        >
          <Link href="/">Domů</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/contact">Kontakt</Link>
        </div>
      </div>
      <div className="navbar-right">
        <Link href="/">Domů</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Kontakt</Link>
      </div>
      <div className="navbar-reorder">
        <button onClick={toogle}>
          <IoReorderThreeSharp className="reorder" />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
