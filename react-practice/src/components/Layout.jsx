import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className=" mt-12 mb-12 flex flex-col items-center justify-center">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
