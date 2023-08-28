import { memo, useState, useImperativeHandle, forwardRef } from "react";

import React from "react";

const AlertModel = (props, ref) => {
  const { title = "", desciption = "", actions = [] } = props;
  const [modelState, setModelState] = useState(true);

  useImperativeHandle(ref, () => ({
    closeModel: () => setModelState(false),
  }));

  return (
    modelState && (
      <section
        className={`alert-model absolute w-1/2 h-1/2 min-w-fit min-h-fit max-w-screen-sm max-h-96 flex flex-col items-center justify-evenly gap-2 bg-indigo-400 p-4 rounded-xl text-white shadow-lg z-10`}
      >
        <h2 className=" capitalize text-2xl font-bold">{title}</h2>
        <p className=" text-lg font-semibold">{desciption}</p>
        <div className=" flex justify-center gap-4 w-full min-w-fit min-h-fit">
          {actions.map(({ buttonName, onClickFunc }) => {
            return (
              <button
                key={buttonName}
                onClick={onClickFunc}
                className=" capitalize p-2 border-2 rounded font-semibold w-32 min-w-fit"
              >
                {buttonName}
              </button>
            );
          })}
        </div>
      </section>
    )
  );
};

export default memo(forwardRef(AlertModel));
