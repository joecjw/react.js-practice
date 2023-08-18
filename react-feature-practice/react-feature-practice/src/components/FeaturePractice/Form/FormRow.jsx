import { useState } from "react";

const FormRow = (props) => {
  const [input, setInput] = useState("");
  const { labelName } = props;

  return (
    <div className="form-row flex flex-col w-full min-w-fit max-w-xl my-4 mx-2 p-2 font-semibold">
      <label
        htmlFor={labelName}
        className="form-label block text-lg capitalize"
      >
        {labelName}
      </label>
      <input
        type="text"
        name={labelName}
        id={labelName}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="form-input w-full max-w-xl p-1 rounded-lg border-solid border bg-gray-50 shadow"
      />
    </div>
  );
};

export default FormRow;
