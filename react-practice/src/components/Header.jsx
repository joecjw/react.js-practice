import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./AuthProvider";

const Header = () => {
  const { auth, setAuth } = useContext(AuthContext);
  return (
    <>
      <nav className="px-8 py-4 flex gap-4 text-white text-xl font-semibold bg-blue-500 items-center justify-around">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        {!auth?.user && <Link to="/login">Login</Link>}
        <Link to="/user-auth-info">User</Link>
        <Link to="/users">All User</Link>
        {auth?.user && (
          <button
            onClick={() => setAuth({})}
            className=" p-1 w-fit border-2 rounded-md"
          >
            Logout
          </button>
        )}
      </nav>
    </>
  );
};

export default Header;
