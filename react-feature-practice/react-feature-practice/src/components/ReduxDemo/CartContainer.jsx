import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItems from "./CartItems";
import { calculateTotal } from "../../features/cart/cartSlice";
import { openModel } from "../../features/model/modelSlice";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  if (amount < 1) {
    return (
      <section className=" w-full h-full font-bold flex flex-col">
        <header className=" flex flex-col items-center justify-center">
          <h2 className=" text-slate-900 text-3xl my-16">YOUR BAG</h2>
        </header>
        <div className="empty-bag flex flex-col items-center justify-center">
          <h4 className="text-slate-700 text-sm">is currently empty</h4>
        </div>
      </section>
    );
  }

  return (
    <section className=" w-full h-full flex flex-col">
      {/* header */}
      <header className=" flex flex-col my-6 items-center justify-center font-bold">
        <h2 className=" text-slate-900 text-3xl py-2">YOUR BAG</h2>
      </header>

      {/* items */}
      <div className="cart-items w-10/12 m-auto flex-1 flex flex-col gap-4">
        {cartItems.map((item, index) => {
          return (
            <div key={item.id}>
              <CartItems key={item.id} {...item} />
            </div>
          );
        })}
      </div>

      {/* footer */}
      <footer className=" flex flex-col justify-center my-4 w-11/12 min-h-min h-1/6 capitalize font-semi m-auto text-slate-900">
        <hr className=" w-full border-black border" />
        <div className="cart-total text-2xl p-2 flex flex-row justify-between">
          <h4>total</h4>
          <h4>${total}</h4>
        </div>
        <div className="flex flex-row justify-center">
          <button
            onClick={() => dispatch(openModel())}
            className="btn-clear w-fit font-semibold border-red-600 text-lg text-red-600 py-1 px-2 border-2 rounded-lg capitalize"
          >
            clear cart
          </button>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
