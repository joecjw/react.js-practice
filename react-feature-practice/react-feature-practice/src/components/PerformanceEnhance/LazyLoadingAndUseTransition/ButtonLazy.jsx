import React from "react";

const ButtonLazy = ({ name, event }) => {
  return (
    <button
      onClick={event}
      className="w-32 min-w-fit m-2 p-1 font-semibold text-white bg-violet-700 rounded-lg"
    >
      {name}
    </button>
  );
};

export default ButtonLazy;
