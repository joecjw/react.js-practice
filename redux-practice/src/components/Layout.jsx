import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="app-container flex flex-col min-w-full min-h-full items-center justify-center gap-8 bg-sky-50">
      <Header />
      <main className="main-container min-h-full min-w-full flex flex-col items-center justify-center gap-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
