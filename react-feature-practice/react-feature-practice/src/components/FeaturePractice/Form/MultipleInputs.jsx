import { useState } from "react";
import FormTitle from "./FormTitle";
import SubmitButton from "./SubmitButton";

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({ name: "", email: "", password: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form flex flex-col items-center min-w-fit max-w-screen-sm h-fit gap-2 p-8 m-6 shadow-lg bg-white rounded-lg"
    >
      <FormTitle content={"Multiple Inputs"} />
      {/* user name row */}
      <div className="form-row- flex flex-col w-full min-w-fit max-w-xl my-4 mx-2 p-2 font-semibold">
        <label htmlFor="name" className="form-label block text-lg capitalize">
          name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
          className="form-input w-full max-w-xl p-1 rounded-lg border-solid border bg-gray-50 shadow"
        />
      </div>
      {/* user email row */}
      <div className="form-row- flex flex-col w-full min-w-fit max-w-xl my-4 mx-2 p-2 font-semibold">
        <label htmlFor="email" className="form-label block text-lg capitalize">
          email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="form-input w-full max-w-xl p-1 rounded-lg border-solid border bg-gray-50 shadow"
        />
      </div>
      {/* user password row */}
      <div className="form-row- flex flex-col w-full min-w-fit max-w-xl my-4 mx-2 p-2 font-semibold">
        <label
          htmlFor="password"
          className="form-label block text-lg capitalize"
        >
          password
        </label>
        <input
          type="text"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          className="form-input w-full max-w-xl p-1 rounded-lg border-solid border bg-gray-50 shadow"
        />
      </div>
      <SubmitButton />
    </form>
  );
};

export default MultipleInputs;
