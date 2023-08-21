import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = "text-blue-700 font-bold text-lg";
  return (
    <header>
      <nav>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? activeStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          to={"/sectionOne"}
          className={({ isActive }) => (isActive ? activeStyle : null)}
        >
          sectionOne
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
