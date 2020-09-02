import React from "react";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import Subtotal from "../Subtotal/Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div>
        {basket?.length === 0 ? (
          <div className="info">
            <h2>You don't have any orders</h2>
          </div>
        ) : (
          <div className="checkout__product">
            <div className="checkout__top">
              <h2 className="checkout__title">Here is your order</h2>
              {basket.length > 0 && (
                <div className="checkout__subtotal">
                  <Subtotal />
                </div>
              )}
            </div>
            <div className="checkout__main">
              {basket.map((item) => (
                <CheckoutItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
