import React from "react";
import NavLinks from "./NavLinks";
import CartWidget from "./components/CartWidget";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      id="header"
      className="header flex justify-between py-4 px-2 bg-slate-800 text-white"
    >
      <Link to={"/"}>
        <h1>Motor Sport Deluxe</h1>
      </Link>

      <NavLinks />
      <CartWidget />
    </header>
  );
}

export default Header;
