import React from "react";
import { useState, useEffect, useCallback } from "react";

const url = "https://api.github.com/users";

const FetchDataOptimized = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    const response = await fetch(url);
    const users_json = await response.json();
    setUsers(users_json);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section className=" flex flex-col items-center mx-12 ">
      <h3 className=" m-4 font-bold text-3xl">Github Users Fetch Example</h3>
      <ul className="users w-full">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li
              key={id}
              className="user-card flex flex-row my-8 py-6 bg-white rounded-lg items-center justify-stretch"
            >
              <img
                src={avatar_url}
                alt={login}
                className=" h-32  rounded-full mx-10"
              />
              <div className=" flex flex-col items-start justify-evenly font-bold">
                <h5 className=" text-2xl">{login}</h5>
                <a href={html_url} className=" text-xl text-blue-700">
                  Profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FetchDataOptimized;
