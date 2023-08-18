import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import { closeModel } from "../../features/model/modelSlice";

const Model = () => {
  const dispatch = useDispatch();
  return (
    <aside className="model-container fixed bg-opacity-50 bg-black top-0 left-0 w-full h-full z-10 flex items-center justify-center font-semibold">
      <div className="model bg-white w-1/2 max-w-md rounded-xl shadow-lg px-8 py-4 text-center">
        <h4 className=" mb-0 tracking-wider leading-8 ">
          Remove ALL Items From Your Shopping Cart?
        </h4>
        <div className=" mt-4 flex justify-around">
          <button
            type="button"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModel());
            }}
            className=" border-2 py-1 w-24 rounded-md border-indigo-500 text-indigo-500 "
          >
            CONFIRM
          </button>
          <button
            type="button"
            onClick={() => dispatch(closeModel())}
            className=" border-2 py-1 w-24 rounded-md border-red-500 text-red-500"
          >
            CANCEL
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Model;
