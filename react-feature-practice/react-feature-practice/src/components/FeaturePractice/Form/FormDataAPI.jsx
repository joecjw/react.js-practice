import { useState } from "react";
import FormTitle from "./FormTitle";
import FormRow from "./FormRow";
import SubmitButton from "./SubmitButton";

// Uncontrolled inputs
const FormDataAPI = () => {
  const [auth, setAuth] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    console.log(newUser);
    setAuth(true);
    e.currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form flex flex-col items-center min-w-fit max-w-screen-sm h-fit gap-2 p-8 m-6 shadow-lg bg-white rounded-lg"
    >
      <FormTitle content={"Form Data API"} />
      <FormRow labelName={"name"} />
      <FormRow labelName={"email"} />
      <FormRow labelName={"password"} />
      <SubmitButton />
    </form>
  );
};

export default FormDataAPI;
