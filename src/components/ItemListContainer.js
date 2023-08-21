import React, { useEffect, useState } from "react";
import { getpProduct } from ".";
import ItemList from "./ItemList";

const ItemLIstContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .them((response) => {
        setProcduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="item">
      <h1>{greeting}</h1>

      <div>
        <ItemList product={products} />
      </div>
    </div>
  );
};
