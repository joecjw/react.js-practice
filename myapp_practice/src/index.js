import React from "react";
import ReactDOM from "react-dom/client";
import BookList from "./BookList";
import "./index.css";

import books from "./books"

// Create root component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1 className="title">Amazon Best Book Sellers</h1>
    <BookList books={ books } />
  </>
);
