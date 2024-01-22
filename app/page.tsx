import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div className="home-container bg-[url('/pizza.jpeg')]">
        <div className="bg">
          <div className="small-div">
            <h1 className="h1-site">Matějova Pizza</h1>
            <p>Pizza, která nikdy nezklame!</p>
            <Link className="bg-btn" href="/menu">
              Objednat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
