import React from "react";
import "./CheckoutItem.css";
import { useStateValue } from "../StateProvider";

function CheckoutItem({ id, name, image, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutItem">
      <div className="checkout__image">
        <img src={image} alt="" />
      </div>
      <div className="checkoutItem__info">
        <div className="checkoutItem__header">
          <h2>{name}</h2>
          <p className="checkoutItem__price">
            $<strong>{price}</strong>
          </p>
        </div>
        <button onClick={() => removeFromBasket(id)}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutItem;
