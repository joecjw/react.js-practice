import { useState, useEffect } from "react";
import FormTitle from "./FormTitle";
import FormRow from "./FormRow";
import SubmitButton from "./SubmitButton";
import People from "../People";


const EditUserDemo = (props) => {
  const { data = [] } = props;
  const [list, setList] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setList(data);
  }, []);

  useEffect(() => {
    if (list.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.name.value;
    if (input) {
      const newUser = {
        id: list.length + 1,
        name: input,
      };
      setList(list.concat(newUser));
    }
  };

  const handleDelete = (id) => {
    const newList = list.filter((people) => people.id !== id);
    setList(newList);
    if (list.length === 0) {
      setIsEmpty(true);
    }
  };

  const handleReset = () => {
    setList(data);
    if (list.length > 0) {
      setIsEmpty(false);
    }
  };

  const handleClear = () => {
    setList([]);
    setIsEmpty(true);
  };

  return (
    <section className="editUserSection flex">
      <form
        onSubmit={() => handleSubmit}
        className="form flex flex-col items-center min-w-fit max-w-screen-sm h-fit gap-2 p-8 m-6 shadow-lg bg-white rounded-lg"
      >
        <FormTitle content={"Add User"} />
        <FormRow key={0} labelName={"name"} />
        <SubmitButton />
      </form>

      <div className="list flex flex-col p-4 m-2 gap-8 items-center bg-white rounded-lg shadow-md">
        <h2 className="list-title text-3xl font-semibold">People List</h2>
        <div className="list-content flex flex-col items-center gap-12">
          {list.map((element) => {
            return (
              <div
                key={`card-${element.id}`}
                className=" flex flex-col items-center"
              >
                <People key={element.id} value={element} />
                <button
                  type="text"
                  onClick={() => handleDelete(element.id)}
                  className="btn-delete w-full min-w-fit max-w-xl m-2 p-1 font-semibold text-white bg-violet-700 rounded-lg"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        {isEmpty ? (
          <button
            className="btn-submit w-full min-w-fit max-w-xl m-2 p-1 font-semibold text-white bg-violet-700 rounded-lg"
            onClick={handleReset}
          >
            Reset
          </button>
        ) : (
          <button
            className=" w-full min-w-fit max-w-xl m-2 p-1 font-semibold text-white bg-violet-700 rounded-lg"
            onClick={handleClear}
          >
            Clear
          </button>
        )}
      </div>
    </section>
  );
};

export default EditUserDemo;
