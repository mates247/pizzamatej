"use client";
import React, { useState } from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
// import { Link } from "react-router-dom";
import Link from "next/link";

const Navigation = () => {
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
          {/*<Link to="/">Domů</Link>*/}
          {/*<Link to="/Menu">Menu</Link>*/}
          {/*<Link to="/About">O Nás</Link>*/}
          {/*<Link to="/Contact">Kontakt</Link>*/}

          {/*<a href="https://www.w3.org/">Domů</a>*/}
          {/*<a href="/Menu">Menu</a>*/}
          {/*<a href="/About">O Nás</a>*/}
          {/*<a href="/Contact">Kontakt</a>*/}
        </div>
      </div>
      <div className="navbar-right">
        <Link href="/">Domů</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/about">O Nás</Link>
        <Link href="/contact">Kontakt</Link>
        {/*<Link to="/">Domů</Link>*/}
        {/*<Link to="/Menu">Menu</Link>*/}
        {/*<Link to="/About">O Nás</Link>*/}
        {/*<Link to="/Contact">Kontakt</Link>*/}
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
