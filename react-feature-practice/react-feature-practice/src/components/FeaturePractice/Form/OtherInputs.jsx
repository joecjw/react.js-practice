import { useState } from "react";
import FormTitle from "./FormTitle";
import SubmitButton from "./SubmitButton";

const OtherInputs = (props) => {
  const { selectorList = [] } = props;
  const [shipping, setShipping] = useState(false);
  const [framwork, setFramwork] = useState(
    Array.from(selectorList)[0] || ""
  );

  const handleShipping = (e) => {
    setShipping(e.target.checked);
  };

  const handleFramwork = (e) => {
    setFramwork(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(shipping);
    console.log(framwork);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form flex flex-col items-center min-w-fit max-w-screen-sm h-fit gap-2 p-8 m-6 shadow-lg bg-white rounded-lg"
    >
      <FormTitle content={"Other Inputs"} />
      {/* checkbox section */}
      <div className="form-row- flex flex-row w-full min-w-fit max-w-xl my-4 mx-2 p-2 font-semibold">
        <label
          htmlFor="shipping"
          className="form-label block text-lg capitalize"
        >
          Free Shipping
        </label>
        <input
          type="checkbox"
          id="shipping"
          name="shipping"
          checked={shipping}
          onChange={handleShipping}
          className="form-input mx-2 w-5"
        />
      </div>
      {/* list selector section */}
      <div className="form-row- flex flex-row w-full min-w-fit max-w-xl my-4 mx-2 p-2 font-semibold">
        <label
          htmlFor="frameworks"
          className="form-label block text-lg capitalize"
        >
          frameworks
        </label>
        <select
          name="frameworks"
          id="frameworks"
          value={framwork}
          onChange={handleFramwork}
          className=" mx-4"
        >
          {selectorList.map((framework) => {
            return (
              <option key={framework} className=" font-semibold">
                {framework}
              </option>
            );
          })}
        </select>
      </div>
      <SubmitButton />
    </form>
  );
};

export default OtherInputs;
