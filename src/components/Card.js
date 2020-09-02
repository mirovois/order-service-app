import React from "react";
import "./Card.css";
import { useStateValue } from "./StateProvider";

function Card({ id, name, image, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // Add to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        image: image,
        price: price,
      },
    });
  };
  return (
    <div className="card">
      <img src={image} />
      <div className="card__info">
        <h3>
          Price <span>${price}</span>
        </h3>
        <button onClick={addToBasket}>Order</button>
      </div>
      <p className="card__title">{name}</p>
    </div>
  );
}

export default Card;
