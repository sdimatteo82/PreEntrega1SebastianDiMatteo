import React from "react";

const CartItem = ({ id, title, quantity, price }) => {
  return (
    <div key={id}>
      <h2>{title}</h2>
      <p>Cantidad: {quantity}</p>
      <p>Precio unitario: ${price}</p>
      <p>Total: ${quantity * price}</p>
    </div>
  );
};

export default CartItem;
