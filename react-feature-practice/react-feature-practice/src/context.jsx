import React, { createContext, useContext, useState } from "react";
import { people } from "./data";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
}

const AppContext = ({children}) => {
  const [name, setName] = useState("React App");
  const [data, setData] = useState(people)

  return (
    <GlobalContext.Provider value={{ name, data }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
