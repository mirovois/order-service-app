import React from "react";
import food_icon from "../images/food_icon.png";
import "../components/Header.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={food_icon} alt="logo" />
      </Link>
      <h1 className="header__title">Breakfast Order Service</h1>
      <Link to="/checkout">
        <div className="header__basket">
          <ShoppingBasketIcon style={{ fontSize: "32px" }} />
          <span className="header__basketCount">{basket?.length}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
