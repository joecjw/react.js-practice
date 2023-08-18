import React from "react";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../features/user/userSlice";

const UserList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery('getUsers');

  let content;
  if (isLoading) {
    content = <div className=" font-bold text-2xl text-white">Loading</div>;
  } else if (isSuccess) {
    content = users.ids.map((id) => {
      return (
        <li
          key={id}
          className=" border rounded p-2 w-full flex gap-2 justify-between items-center"
        >
          <h3>{users.entities[id].name}</h3>
          <button className="border rounded p-1 w-1/3 min-w-min">
            <Link to={`/user/${id}`}>View</Link>
          </button>
        </li>
      );
    });
  } else if (isError) {
    content = (
      <div className=" font-bold text-2xl text-white">Error: {error}</div>
    );
  }

  return (
    <section className="min-w-min w-1/2 p-8 my-12 text-white rounded-lg bg-blue-500 flex flex-col items-start justify-center gap-4">
      <h2 className=" text-3xl font-bold">Users</h2>
      <ul className="w-full flex flex-col gap-2 text-xl font-semibold">
        {content}
      </ul>
    </section>
  );
};

export default UserList;
