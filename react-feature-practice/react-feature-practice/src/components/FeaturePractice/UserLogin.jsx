import { useState } from "react";

const UserLogin = () => {
  const [user, setUser] = useState(null);

  const loadUser = () => {
    setUser({name : "Test User"});
  };

  const unloadUser = () => {
    setUser(null);
  };

  if (!user) {
    return (
      <div className=" flex flex-col items-center font-bold">
        <h2>Please Login</h2>
        <button
          type="button"
          onClick={loadUser}
          className=" bg-zinc-800 text-white"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className=" flex flex-col items-center font-bold">
      <h2>Hello {user.name}</h2>
      <button
        type="button"
        onClick={unloadUser}
        className=" bg-zinc-800 text-white"
      >
        Logout
      </button>
    </div>
  );
};

export default UserLogin;
