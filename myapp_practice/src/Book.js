import React from "react";

const Book = ({ book: { image, title, author, description, url }, number }) => {
  return (
    <>
      <article className="book">
        <span className="number">#{number + 1}</span>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
        <p>{description}</p>
        <button
          onClick={() => {
            alert(`Book URL: ${url}`);
          }}
        >
          Read Online
        </button>
      </article>
    </>
  );
};

export default Book;
