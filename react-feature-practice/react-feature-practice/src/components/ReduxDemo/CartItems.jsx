import React from "react";
import { useDispatch } from "react-redux";
import { ChevronUp, ChevronDown } from "./icons";
import { removeItem, increase, decrease } from "../../features/cart/cartSlice";

const CartItems = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <section className="item flex gap-4 bg-slate-50  rounded-xl p-4">
      <img src={img} alt={title} className=" h-20" />
      <div className=" flex flex-1 justify-between text-slate-800">
        <div className="flex flex-col justify-around">
          <div className=" text-md font-semibold">{title}</div>
          <div className=" font-semibold text-sm text-gray-500">${price}</div>
          {/* //pass id as object */}
          <button
            onClick={() => dispatch(removeItem(id))}
            className="  text-left w-fit font-semibold text-sm text-red-500"
          >
            remove
          </button>
        </div>
        <div className=" flex flex-col items-center justify-center">
          {/* //pass id as property */}
          <button onClick={() => dispatch(increase({ id }))}>
            <ChevronUp />
          </button>
          <div className=" font-semibold">{amount}</div>
          <button
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItem(id));
                return;
              }
              dispatch(decrease({ id }));
            }}
          >
            <ChevronDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
