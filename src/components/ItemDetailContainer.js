import { useEffect, useState } from "react";
import { GetProductById } from "./AsyncMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    GetProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);
  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};
export default ItemDetailContainer;
