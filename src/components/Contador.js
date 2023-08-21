import { useState } from "react";

function Contador() {
  let [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div className="p-2 grow">
      <p>Contador : {contador}</p>
      <button className="border p-1 rounded " onClick={sumar}>
        sumar
      </button>
      <button onClick={restar}>restar</button>
    </div>
  );
}

export default Contador;
