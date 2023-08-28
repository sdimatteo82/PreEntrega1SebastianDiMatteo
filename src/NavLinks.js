import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <nav className="flex gap-4">
      <NavLink
        to={"/category/automoviles"}
        className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
      >
        Automoviles
      </NavLink>
      <NavLink
        to={"/category/Moto"}
        className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
      >
        Motos
      </NavLink>
      <NavLink
        to={"/category/moto de agua"}
        className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
      >
        PWC
      </NavLink>
    </nav>
  );
}

export default NavLinks;
