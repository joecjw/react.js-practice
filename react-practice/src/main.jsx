import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className=" bg-blue-400 flex flex-col min-h-screen">
      <App />
    </main>
  </React.StrictMode>
);
