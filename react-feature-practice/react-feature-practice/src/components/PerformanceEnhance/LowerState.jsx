import { useState, useCallback } from "react";
import { people } from "../../data";
import List from "../FeaturePractice/List";
import Counter from "./Counter";

const LowerState = () => {
  const [list, setList] = useState(people);

  const removeElement = useCallback(
    (id) => {
      const newList = list.filter((element) => element.id !== id);
      setList(newList);
    },
    [list]
  );

  return (
    <section className=" flex flex-col items-center">
      <Counter />
      <List data={list} removeElement={removeElement} />
    </section>
  );
};
export default LowerState;
