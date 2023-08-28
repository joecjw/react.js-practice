import { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AlertModel from "../AlertModel";

const Layout = () => {
  const { state } = useLocation();
  const modelRef = useRef();

  return (
    <div className="app-layout min-h-full min-w-full flex-1 flex flex-col items-center justify-center gap-12 bg-indigo-300">
      <Header />
      <main className="app-main h-full w-full flex-1 flex flex-col items-center justify-center ">
        {state?.from === "logout" && (
          <AlertModel
            title="Sign Out Successfully"
            actions={[
              {
                buttonName: "OK",
                onClickFunc: () => {
                  modelRef.current.closeModel();
                },
              },
            ]}
            ref={modelRef}
          />
        )}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
