import React, { useState, useEffect } from "react";
import "./Home.css";
import Card from "./Card";
import item from "../images/item1.jpg";
import menu from "../menu-items";
import { useStateValue } from "./StateProvider";

function Home() {
  const { lot1, lot2 } = menu;
  console.log(lot1);

  return (
    <div className="home">
      <div className="home__special">
        {Object.keys(lot1).map((key) => (
          <Card
            key={key}
            name={lot1[key].name}
            image={lot1[key].image}
            desc={lot1[key].desc}
            price={lot1[key].price}
          />
        ))}
      </div>

      <div className="home__additional">
        {Object.keys(lot2).map((key) => (
          <Card
            name={lot2[key].name}
            image={lot2[key].image}
            desc={lot2[key].desc}
            price={lot2[key].price}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
