import React from "react";

const FormTitle = (props) => {
  const { content } = props;
  return <h4 className="form-title p-1 w-full min-w-fit max-w-xl rounded-md text-center text-2xl font-semibold">{content}</h4>;
};

export default FormTitle;
