import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header-nav py-4 w-full h-min flex items-center justify-evenly gap-4 text-white text-lg font-semibold bg-indigo-400">
      <Link to="/">Home</Link>
      <Link to="/register">Sign Up</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Header;
