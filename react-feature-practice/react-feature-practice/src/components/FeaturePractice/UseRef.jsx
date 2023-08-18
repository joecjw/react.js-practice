import { useState, useEffect, useRef } from "react";
import FormTitle from "./Form/FormTitle";
import SubmitButton from "./Form/SubmitButton";

const UseRef = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      refContainer.current.value = 'Enter name here'
      refContainer.current.focus()
      isMounted.current = true;
      return;
    }
  }, []);

  useEffect(() => {
    if (!isMounted.current) {
      console.log("initail render");
      isMounted.current = true;
      return;
    }
    console.log("re-render value");
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    refContainer.current.value = "Enter name here";
    refContainer.current.focus();
    setValue(0)
  };

  return (
    <div className=" flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="form flex flex-col items-center min-w-fit max-w-screen-sm h-fit gap-2 p-8 m-6 shadow-lg bg-white rounded-lg"
      >
        <FormTitle content={"Form Data API"} />
        <div className="form-row flex flex-col w-full min-w-fit max-w-xl my-4 mx-2 p-2 font-semibold">
          <label htmlFor="name" className="form-label block text-lg capitalize">
            name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            ref={refContainer}
            className="form-input w-full max-w-xl p-1 rounded-lg border-solid border bg-gray-50 shadow"
          />
        </div>
        <SubmitButton />
      </form>
      <label id="value" htmlFor="value" className=" m-2 p-2 font-bold text-2xl">
        Value: {value}
      </label>
      <button
        onClick={() => setValue(value + 1)}
        className="btn-value w-28 min-w-fit max-w-xl m-2 p-1 font-semibold text-white bg-violet-700 rounded-lg"
      >
        Increase
      </button>
    </div>
  );
};

export default UseRef;
