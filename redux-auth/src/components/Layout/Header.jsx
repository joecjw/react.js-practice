import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectCurrentAuth, logout } from "../../features/authSlice";
import { useCallback } from "react";

const Header = () => {
  const { username } = useSelector(selectCurrentAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = useCallback(() => {
    dispatch(logout());
    navigate("/", { replace: true, state: { from: "logout" } });
  }, []);

  return (
    <nav className="header-nav py-4 w-full h-min flex items-center justify-around gap-4 text-white text-lg font-semibold bg-indigo-400">
      <Link to="/">Home</Link>
      {username ? (
        <>
          <Link to="/myportal">My Portal</Link>
          <div className=" flex gap-4 items-center justify-center">
            <p>{username}</p>
            <button
              onClick={handleSignOut}
              className=" p-2 border-2 border-white rounded w-fit"
            >
              Sign Out
            </button>
          </div>
        </>
      ) : (
        <>
          <Link to="/register">Sign Up</Link>
          <Link to="/login">Login</Link>
          <Link to="/myportal">My Portal</Link>
        </>
      )}
    </nav>
  );
};

export default Header;
