import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi, todosApi } from "./features/api/apiSlice";
// import AppContext from "./context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={todosApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>

  // <AppContext>
  //   <App />
  // </AppContext>
);
