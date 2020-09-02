import React from "react";
import "./Subtotal.css";
import { calculateSubtotal } from "../../reducer";
import { useStateValue } from "../StateProvider";

const Subtotal = (id, price) => {
  const [{ basket }, dispatch] = useStateValue();
  // let myBasket = { ...basket };
  console.log(basket.legth);

  const formatPrice = (amount) => {
    return amount.toLocaleString("en-CA", {
      style: "currency",
      currency: "CAD",
    });
  };

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):
        <strong>{formatPrice(calculateSubtotal(basket))}</strong>
      </p>
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
