import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../features/api/authApiSlice";
import { setCredentials } from "../features/authSlice";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [login, { isLoading }] = useLoginMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setErrMsg("");
  }, [userName, email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login({
      userNameEmail: userName.concat(":").concat(email),
      password: pwd,
    })
      .unwrap()
      .then((data) => {
        console.log(data);
        dispatch(setCredentials(data));
        setUserName("");
        setEmail("");
        setPwd("");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setErrMsg(error?.data?.message);
      });
  };

  const content = isLoading ? (
    <h2 className=" text-white text-2xl font-semibold">Login in...</h2>
  ) : (
    <section className="login relative min-h-fit min-w-fit w-1/2 p-4 flex-1 flex flex-col items-center border-4 border-white rounded-lg">
      <p
        className={errMsg ? " text-red-600 font-bold " : " hidden"}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <h1 className=" text-white text-3xl font-semibold p-1">User Login</h1>

      <form
        onSubmit={handleSubmit}
        className="px-4 w-full min-w-fit min-h-fit flex-1 flex flex-col items-start justify-evenly text-white font-semibold"
      >
        <div className=" w-full flex flex-col items-start justify-center">
          <label htmlFor="userName" className="text-xl py-2">
            Username
          </label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            autoComplete="off"
            required
            className="p-1 py-2 text-indigo-500 rounded w-full"
          />
          <p className=" text-sm font-semibold text-white py-2">
            First and Last Name (Separated by ONE White Space)
          </p>
        </div>
        <div className=" w-full flex flex-col items-start justify-center">
          <label htmlFor="email" className="text-xl py-2">
            Email Address:
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            required
            className="p-1 py-2 text-indigo-500 rounded w-full"
          />
        </div>

        <div className=" w-full flex flex-col items-start justify-center">
          <label htmlFor="password" className="text-xl py-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            className=" p-1 py-2 text-indigo-500 rounded w-full"
          />
        </div>

        <div className=" mt-6 w-full flex flex-col items-center justify-center">
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
