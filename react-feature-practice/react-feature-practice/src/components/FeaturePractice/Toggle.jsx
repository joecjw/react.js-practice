import { useState } from "react";

const Toggle = () => {
  const [isExist, setIsExist] = useState(false);

  const toggleComponent = () => {
    setIsExist(!isExist);
  };

  return (
    <div>
      <button type="button" onClick={toggleComponent}>
        {isExist ? "Hide" : "Show"}
      </button>
      {isExist ? <div>Dummy Component</div> : ""}
    </div>
  );
};

export default Toggle;
