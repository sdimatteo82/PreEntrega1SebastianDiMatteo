import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ id, name, price, category, img, stock, description }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = { id, name, price };
    addItem(item, quantity);
  };
  return (
    <article className="card ">
      <header>
        <h2>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} />
      </picture>
      <section>
        <p>categoria: {category} </p>

        <p>precio: {price}</p>
        <p>descripcion: {description}</p>
      </section>
      <footer>
        {quantityAdded > 0 ? (
          <Link
            to="/cart"
            className="rounded-lg justify-between py-1 px-2 bg-slate-500 text-white"
          >
            Terminar compra
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
