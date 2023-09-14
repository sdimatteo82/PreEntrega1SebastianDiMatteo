import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";

import { db } from "../FirebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "productos", itemId);

    getDoc(docRef)
      .then((response) => {
        if (response.exists()) {
          const data = response.data();
          const productAdapted = { id: response.id, ...data };
          setProduct(productAdapted);
        } else {
          console.log("El documento no existe.");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
