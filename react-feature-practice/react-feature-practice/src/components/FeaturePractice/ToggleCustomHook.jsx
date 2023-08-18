import useToggle from "./useToggle";

const ToggleCustomHook = () => {
  const [show, toggle] = useToggle(true);

  return (
    <>
      <button
        onClick={toggle}
        className="btn-toggle w-32 min-w-fit max-w-xl m-2 p-1 font-semibold text-white bg-violet-700 rounded-lg"
      >
        {show ? "Hide" : "Show"}
      </button>
      {show ? <div className=" bg-white p-2 rounded-md">Component</div> : ""}
    </>
  );
};

export default ToggleCustomHook;
