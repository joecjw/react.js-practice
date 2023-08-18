import { useState, useEffect, useTransition } from "react";

const newItems = Array.from({ length: 5000 }, (_, index) => {
  return (
    <div key={index}>
      <img className=" w-20 bg-white" src="/react.png" alt="" />
    </div>
  );
});

const FormLazy = () => {
  const [text, setText] = useState("");
  const [display, setDisplay] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value);
    startTransition(() => {
      setDisplay(newItems);
    });
  };

  return (
    <section className="form-with-display-items flex flex-col items-center">
      <form className=" mb-12">
        <input
          className=" m-4 p-2 border shadow-lg rounded-lg"
          type="text"
          value={text}
          onChange={handleChange}
        />
      </form>
      {isPending ? (
        <p className="m-4 p-4 text-center text-2xl font-medium">
          Form Data Loading...
        </p>
      ) : (
        <div className="items grid grid-cols-6 mt-8">{display}</div>
      )}
    </section>
  );
};

export default FormLazy;
