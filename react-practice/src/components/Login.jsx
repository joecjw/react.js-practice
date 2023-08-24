// import axios from "axios";
import { useRef, useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "./AuthProvider";

// axios.create({ baseURL: "http://localhost:3500" });

// const LOGIN_URL = "/auth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true);
    setAuth({ user, pwd, roles: ["ROLE_TESTER"], accessToken: "Test Token" });
    // try { 
    //   const response = await axios.post(
    //     LOGIN_URL,
    //     JSON.stringify({ user, pwd }),
    //     {
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true,
    //     }
    //   );
    //   console.log(JSON.stringify(response?.data));
    //   const accessToken = response?.data?.accessToken;
    //   const roles = response?.data?.roles;
    //   setAuth({ user, pwd, roles, accessToken });
    //   setUser("");
    //   setPwd("");
    //   setSuccess(true);
    // } catch (err) {
    //   if (!err?.response) {
    //     setErrMsg("No Server Response");
    //   } else if (err.response?.status === 400) {
    //     setErrMsg("Missing Username or Password");
    //   } else if (err.response?.status === 401) {
    //     setErrMsg("Unauthorized");
    //   } else {
    //     setErrMsg("Login Failed");
    //   }
    //   errRef.current.focus();
    // }
    setUser("");
    setPwd("");
    alert("Login Successfully");
    navigate(from, { replace: true });
  };

  return (
    <>
      <section className=" w-full max-w-md min-h-fit flex flex-col justify-start p-4 bg-blue-200 rounded-xl text-blue-900">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1 className=" text-2xl font-semibold">Sign In</h1>
        <form
          onSubmit={handleSubmit}
          className=" flex-1 flex flex-col justify-evenly pb-4"
        >
          <label htmlFor="username" className=" py-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            className=" rounded-md p-1"
          />

          <label htmlFor="password" className=" py-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            className=" rounded-md p-1 "
          />
          <button className=" border-2 rounded-md my-2 mt-6 p-2 border-white font-semibold disabled:opacity-50">
            Sign In
          </button>
        </form>
        <p>
          Need an Account?
          <br />
          <Link to="/register" className=" underline">
            Sign Up
          </Link>
        </p>
      </section>
    </>
  );
};

export default Login;
