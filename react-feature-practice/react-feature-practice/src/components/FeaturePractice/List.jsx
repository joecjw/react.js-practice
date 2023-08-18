import People from "./People";
import { memo } from "react";

const List = (props) => {
  const { data = [], removeElement } = props;

  return (
    <div className="list flex flex-col p-4 m-2 gap-8 items-center bg bg-white rounded-lg shadow-md">
      <h2 className="list-title text-4xl font-bold">People List</h2>
      <div className="list-content flex flex-col items-center gap-12">
        {data.map((element) => {
          return (
            <div key={element.id} className=" flex flex-col items-center">
              <People key={element.id} value={element} />
              <button
                onClick={() => removeElement(element.id)}
                className=" w-full min-w-fit max-w-xl m-2 p-1 font-semibold text-white bg-violet-700 rounded-lg"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(List);
