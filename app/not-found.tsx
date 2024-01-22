import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="not-found">
      <h2 className="h1-site">Asi si zabloudil</h2>
      <p>tahle stránka neexistuje </p>

      <p>
        na hlavní stránku se můžeš vrátit tady:{" "}
        <span>
          <Link href="/">Domů</Link>
        </span>
      </p>
      <img src="./pes.jpg" alt="" />
    </div>
  );
};

export default Page;
