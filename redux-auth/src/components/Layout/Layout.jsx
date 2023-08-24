import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="app-layout min-h-full min-w-full flex-1 flex flex-col items-center justify-center gap-12 bg-indigo-300">
      <Header />
      <main className="app-main h-full w-full flex-1 flex flex-col items-center justify-center ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
