import React from "react";
import Book from "./Book";

const BookList = ({ books }) => {
  const bookList = books.map((book, index) => {
    return <Book book={book} key={book.id} number={index} />;
  });

  return <section className="bookList">{bookList}</section>;
};

export default BookList;
