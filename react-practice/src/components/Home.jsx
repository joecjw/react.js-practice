import { useContext } from "react";
import AuthContext from "./AuthProvider";

const Home = () => {
  const { auth } = useContext(AuthContext);
  return (
    <section className=" flex flex-col gap-12 text-white text-2xl font-semibold">
      <h1>Home Page</h1>
      <h2>Welcome {auth?.user || "Unknown User"}</h2>
    </section>
  );
};

export default Home;
