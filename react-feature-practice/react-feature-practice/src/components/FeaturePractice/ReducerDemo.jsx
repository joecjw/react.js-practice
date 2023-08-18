import FormTitle from "./Form/FormTitle";
import FormRow from "./Form/FormRow";
import SubmitButton from "./Form/SubmitButton";
import People from "./People";
import { useGlobalContext } from "../../context";
import { useReducer } from "react";
import { reducer } from "./reducers";
import {
  ADD_USER,
  Delete_LIST_ELEMENT,
  LOAD_LIST,
  CLEAR_LIST,
} from "./actions";

const ReducerDemo = () => {
  const { data } = useGlobalContext();

  const defaultState = {
    list: data,
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.name.value;
    dispatch({ type: ADD_USER, payload: { input } });
  };

  const handleDelete = (id) => {
    dispatch({ type: Delete_LIST_ELEMENT, payload: { id } });
  };

  const handleReset = () => {
    dispatch({ type: LOAD_LIST, payload: { data } });
  };

  const handleClear = () => {
    dispatch({ type: CLEAR_LIST });
  };

  return (
    <section className="editUserSection flex">
      <form
        onSubmit={handleSubmit}
        className="form flex flex-col items-center min-w-fit max-w-screen-sm h-fit gap-2 p-8 m-6 shadow-lg bg-white rounded-lg"
      >
        <FormTitle content={"Add User"} />
        <FormRow key={0} labelName={"name"} />
        <SubmitButton />
      </form>

      <div className="list flex flex-col p-4 m-2 gap-8 items-center bg-white rounded-lg shadow-md">
        <h2 className="list-title text-3xl font-semibold">People List</h2>
        <div className="list-content flex flex-col items-center gap-12">
          {state.list.map((element) => {
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
        {state.list.length < 1 ? (
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

export default ReducerDemo;
