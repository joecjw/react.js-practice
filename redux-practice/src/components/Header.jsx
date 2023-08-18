import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header h-min w-full flex gap-8 items-center bg-blue-600 text-white">
      <h1 className=" font-extrabold text-2xl py-6 pl-12">Redux Blog</h1>
      <nav className=" flex-1">
        <ul className=" flex justify-end gap-4 text-lg font-semibold">
          <li className=" hover: cursor-pointer mx-2">
            <Link to="/">Home</Link>
          </li>
          <li className=" hover: cursor-pointer mx-2">
            <Link to="post">Post</Link>
          </li>
          <li className=" hover: cursor-pointer mx-2 mr-6">
            <Link to="user">User</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
