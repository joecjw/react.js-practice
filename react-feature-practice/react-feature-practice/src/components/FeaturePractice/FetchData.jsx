import React from "react";
import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(url);
      const users_json = await response.json();
      setUsers(users_json);
    };
    fetchUsers();
  }, []);

  return (
    <section className=" flex flex-col items-center mx-12 mt-12">
      <h3 className=" m-4 font-bold text-3xl">Github Users Fetch Example</h3>
      <ul className="users w-full">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li
              key={id}
              className=" flex flex-row my-8 py-6 bg-gray-100 rounded-lg items-center justify-stretch"
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

export default FetchData;
