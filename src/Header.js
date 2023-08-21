import React from "react";
import NavLinks from "./NavLinks";
import CartWidget from "./components/CartWidget";

function Header() {
  return (
    <header
      id="header"
      className="header flex justify-between py-4 px-2 bg-slate-800 text-white"
    >
      <h1>Mi Pagina</h1>
      <NavLinks />
      <CartWidget />
    </header>
  );
}

export default Header;
