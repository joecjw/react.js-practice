import React from "react";
import User from "./User";
import { Link, useParams } from "react-router-dom";
import { useGetPostsByUserIdQuery } from "../../features/post/postSlice";
// import { useSelector } from "react-redux";
// import { selectUserById } from "../../features/user/userSlice";
import { useGetUsersQuery } from "../../features/user/userSlice";

const SingleUserPage = () => {
  const { userId } = useParams();

  // const user = useSelector((state) => selectUserById(state, Number(userId))); //selector approac
  const {
    user,
    isLoading: isLoadingUser,
    isSuccess: isSuccessUser,
    isError: isErrorUser,
    error: errorUser,
  } = useGetUsersQuery("getUsers", {
    selectFromResult: ({ data, isLoading, isSuccess, isError, error }) => ({
      user: data?.entities[userId],
      isLoading,
      isSuccess,
      isError,
      error,
    }),
  });

  const {
    data: userPosts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsByUserIdQuery("getPostsByUserId", Number(userId));

  let userContent;
  if (isLoadingUser) {
    userContent = (
      <div className=" text-white text-2xl font-bold">Loading User Info...</div>
    );
  } else if (isSuccessUser) {
    userContent = <User id={Number(userId)} />;
  } else if (isErrorUser) {
    userContent = (
      <div className=" text-white text-2xl font-bold">User Error: {error}</div>
    );
  }

  let postContent;
  if (isLoading) {
    postContent = (
      <div className=" text-white text-2xl font-bold">Loading Posts...</div>
    );
  } else if (isSuccess) {
    const { ids, entities } = userPosts;
    postContent = ids.map((id) => {
      return (
        <li
          key={id}
          className=" text-base border rounded p-2 w-full flex gap-2 justify-between items-center mb-2"
        >
          <h4 className=" font-medium">
            <span className=" font-semibold text-xl">Title: </span>{" "}
            {entities[id].title}
          </h4>
          <button className="border rounded p-1 px-4 w-min">
            <Link to={`/post/${id}`}>View</Link>
          </button>
        </li>
      );
    });
  } else if (isError) {
    postContent = (
      <div className=" text-white text-2xl font-bold">Posts Error: {error}</div>
    );
  }

  return (
    <section className="min-w-min w-1/2 p-8 my-12 text-white rounded-lg bg-blue-500 flex flex-col items-start justify-center gap-4">
      <h2 className=" text-3xl font-bold">{user?.name || "Unknown User"}</h2>
      <ul className="w-full flex flex-col gap-2 text-xl font-semibold">
        <div className=" pb-4">
          <h3 className="p-1">User Details</h3>
          {userContent || "User Not Exists"}
        </div>
        <div>
          <h3 className="p-1">User's Posts</h3>
          {postContent || "No Posts Avaliable"}
        </div>
      </ul>
    </section>
  );
};

export default SingleUserPage;
