import React from "react";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <div>
      <i className="material-icons">shopping_cart </i>
    </div>
  );
}

export default CartWidget;
