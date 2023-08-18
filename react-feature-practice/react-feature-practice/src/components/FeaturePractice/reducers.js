import {
  ADD_USER,
  Delete_LIST_ELEMENT,
  LOAD_LIST,
  CLEAR_LIST,
} from "./actions";

export const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, list: [] };
  } else if (action.type === LOAD_LIST) {
    return { ...state, list: action.payload.data };
  } else if (action.type === Delete_LIST_ELEMENT) {
    const newList = state.list.filter(
      (element) => element.id !== action.payload.id
    );
    return { ...state, list: newList };
  } else if (action.type === ADD_USER) {
    if (action.payload.input) {
      const newUser = {
        id: state.list.length + 1,
        name: action.payload.input,
      };
      const newList = state.list.concat(newUser);
      alert(`New User With name= ${newUser.name} Added`);
      return { ...state, list: newList };
    } else {
      alert("Invalid Input Username");
      return { ...state };
    }
  }

  throw new Error(`No matching "${action.type}" - action type`);
};
