import { useState } from "react";

function Main() {
  const [show, setShow] = useState(false);

  const toogleMenu = () => {
    setShow(!show);
  };

  if (show) {
    return (
      <main className="p-2 grow">
        <button onClick={toogleMenu} className="border p-1 rounded">
          toogle Menu
        </button>
      </main>
    );
  } else {
    return (
      <main className="p-2 grow">
        <button onClick={toogleMenu}>toogle Menu</button>
        <ul>
          <li>Nosotros</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
      </main>
    );
  }
}

export default Main;
