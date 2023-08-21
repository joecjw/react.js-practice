import React from "react";
import { NavLink } from "react-router-dom";
import DemoObject from "../components/DemoObject";

const SectionOne = () => {
  return (
    <>
      <>
        <DemoObject />
        <NavLink to={"/DemoObject/1"}>View</NavLink>
      </>
      <>
        <DemoObject />
        <NavLink to={"/DemoObject/2"}>View</NavLink>
      </>
      <>
        <DemoObject />
        <NavLink to={"/DemoObject/3"}>View</NavLink>
      </>
    </>
  );
};

export default SectionOne;
