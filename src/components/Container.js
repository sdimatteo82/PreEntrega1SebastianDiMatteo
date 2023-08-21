import { useEffect, useState } from "react";
import Presentacional from "./Presentacional";

function getProduct(setData) {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => setData(json));
}

function Container() {
  const [data, setData] = useState([]);

  return <Presentacional data={data} />;
}
export default Container;
