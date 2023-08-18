import { useSelector } from "react-redux";
import { CartIcon } from "./icons";
import React from "react";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <nav className="bg-indigo-600 py-5 flex flex-row justify-around items-center ">
      <h3 className=" capitalize font-bold text-2xl  text-white">
        redux toolkit
      </h3>
      <div className="nav-container mx-6 text-white relative">
        <CartIcon />
        <div className="amount-container absolute flex items-center justify-center bg-indigo-400 w-6 h-6 rounded-full -top-2 -right-2">
          <p className="total-amount text-lg">{amount}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
