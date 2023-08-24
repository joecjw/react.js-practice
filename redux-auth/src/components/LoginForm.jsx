import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../features/api/authApiSlice";
import { setCredentials } from "../features/authSlice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [login, { isLoading }] = useLoginMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ email, pwd }).unwrap();
      dispatch(setCredentials({ ...userData, email }));
      setEmail("");
      setPwd("");
      navigate("/");
    } catch (error) {
      if (!error?.originalStatus) {
        setErrMsg("No Server Response");
      } else if (error?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (error?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  const content = isLoading ? (
    <h2 className=" text-white text-2xl font-semibold">Login in...</h2>
  ) : (
    <section className="login relative min-w-min w-2/3 min-h-min max-h-96 p-4 flex-1 flex flex-col items-center border-4 border-white rounded-lg">
      <p
        className={errMsg ? " text-red-600 font-bold " : " hidden"}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <h1 className=" text-white text-3xl font-semibold p-1">Employee Login</h1>

      <form
        onSubmit={handleSubmit}
        className="px-4 flex-1 w-full h-full flex flex-col items-start justify-evenly text-white font-semibold"
      >
        <div>
          <label htmlFor="email" className="text-xl">
            Email Address:
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            required
            className="p-1 text-indigo-500 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="password" className="text-xl">
            Password:
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            className=" p-1 text-indigo-500 rounded w-full"
          />
        </div>

        <div className=" w-full flex flex-col items-center justify-center">
          <button className=" text-xl border-2 border-white rounded p-1 min-w-min w-3/5">
            Sign In
          </button>
        </div>
      </form>
    </section>
  );

  return content;
};

export default LoginForm;
