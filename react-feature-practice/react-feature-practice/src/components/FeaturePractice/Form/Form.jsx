import React from "react";
import FormTitle from "./FormTitle";
import FormRow from "./FormRow";
import SubmitButton from "./SubmitButton";

const logAction = (value) => {
  console.log(value);
}

const Form = (props) => {
  const {title= 'Default Title', rows= [], action = logAction} = props
  const handleSubmit = (e) => {
    action(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form flex flex-col items-center min-w-fit max-w-screen-sm h-fit gap-2 p-8 m-6 shadow-lg bg-white rounded-lg"
    >
      <FormTitle content={title} />
      
      {rows.map((row, index) => {
        return <FormRow key={index} labelName={row} />;
      })}
      <SubmitButton />
    </form>
  );
};

export default Form;
