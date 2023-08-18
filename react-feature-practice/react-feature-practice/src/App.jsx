import TodoList from "./components/RTK-Query-Practice/TodoList";

//RTK Query Practice
function App() {
  return (
    <main className="app-container bg-slate-100 flex flex-col w-full h-full">
      <TodoList />
    </main>
  );
}

export default App;

// For Basic Redux and React Practice
// // import UseTransitionDemo from "./components/PerformanceEnhance/LazyLoadingAndUseTransition/UseTransitionDemo";
// // import { useGlobalContext } from "./context";
// import CartContainer from "./components/ReduxDemo/CartContainer";
// import Model from "./components/ReduxDemo/Model";
// import Navbar from "./components/ReduxDemo/Navbar";
// import { getCartItems } from "./features/cart/cartSlice";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";

// function App() {
//   // const { name } = useGlobalContext();
//   const { isLoading } = useSelector((state) => state.cart);
//   const { isOpen } = useSelector((state) => state.model);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getCartItems({name:'User'}));
//   }, []);

//   if (isLoading) {
//     return (
//       <main className="app-container bg-slate-100 flex flex-col w-full h-full">
//         {isOpen && <Model />}
//         <Navbar />
//         <div className=" w-full h-full flex items-center justify-center text-4xl font-semibold text-indigo-500">
//           Loading...
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="app-container bg-slate-100 flex flex-col w-full h-full">
//       {isOpen && <Model />}
//       <Navbar />
//       <CartContainer />
//     </main>
//     //   <div className="app-container bg-slate-100 w-full min-h-full flex flex-col gap-6 items-center">
//     //     {/* <h1 className=" mt-12 font-bold text-2xl">{name}</h1> */}
//     //   </div>
//   );
// }

// export default App;
