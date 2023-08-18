import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  const onClickToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="  mt-12 flex flex-col items-center gap-6">
      <button
        type="button"
        onClick={onClickToggle}
        className=" bg-black text-white rounded-lg p-6 font-bold text-lg"
      >
        Toggle
      </button>
      {toggle && <SecondComponment />}
    </div>
  );
};

const SecondComponment = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent("Default Content");
    const logFunc = () => {
      console.log("scrolling");
    };
    window.addEventListener("scroll", logFunc);

    return () => {
      setContent("");
      window.removeEventListener("scroll", logFunc);
    };
  }, []);

  return <div className="font-bold text-2xl text-slate-800">{content}</div>;
};

export default CleanupFunction;
