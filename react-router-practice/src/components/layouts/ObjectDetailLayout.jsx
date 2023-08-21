import React from "react";
import { Outlet } from "react-router-dom";
import ObjectDetailHeader from "../ObjectDetailHeader";

const ObjectDetailLayout = () => {
  return (
    <>
      <ObjectDetailHeader />
      <Outlet />
    </>
  );
};

export default ObjectDetailLayout;
