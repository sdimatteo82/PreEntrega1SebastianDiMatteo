import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, clearCart, totalQUantity, total } = useContext(CartContext);

  if (totalQUantity === 0) {
    return (
      <div>
        <h1>No hay item en el carrito</h1>
        <link to="/">productos</link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}

      <button
        onClick={() => clearCart()}
        className="rounded-lg justify-between py-1 px-2 bg-slate-500 text-white"
      >
        Limpiear carrito
      </button>
      <Link
        to="/checkout"
        className="rounded-lg justify-between py-1 px-2 bg-slate-500 text-white"
      >
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
