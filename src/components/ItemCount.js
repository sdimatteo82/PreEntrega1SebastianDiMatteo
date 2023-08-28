import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decriment = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
      <div className=" flex justify-center items-center py-6 px-2">
        <button
          className="rounded py-4 px-2 bg-slate-500 text-white"
          onClick={decriment}
        >
          {" "}
          -{" "}
        </button>
        <h4 className="mx-4">{quantity}</h4>
        <button
          className="rounded py-4 px-2 bg-slate-500 text-white"
          onClick={increment}
        >
          {" "}
          +{" "}
        </button>
      </div>

      <div className="text-center">
        <button
          className="rounded py-4 px-2 bg-slate-500 text-white"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
