import { useContext } from "react";
import AuthContext from "./AuthProvider";

const AuthInfo = () => {
  const { auth } = useContext(AuthContext);

  return (
    <section className=" flex flex-col gap-2 text-white">
      <p>User: {auth?.user || "Unknown User"}</p>
      <p>Password: {auth?.pwd || "No Password"}</p>
      <p>Roles: {auth?.roles || "No Roles"}</p>
      <p>Access Token: {auth?.accessToken || "No Access Token"}</p>
    </section>
  );
};

export default AuthInfo;
