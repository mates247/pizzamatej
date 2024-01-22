import React from "react";
import data from "@/app/data";

const OnePizza = () => {
  return (
    <div className="pizza-box">
      {data.map((oneItem) => {
        const { name, price, id, image } = oneItem;
        return (
          <div key={id} className="one-pizza">
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default OnePizza;
