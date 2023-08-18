// import { useSelector } from "react-redux";
// import { selectAllUsers } from "../../features/user/userSlice";
import React from "react";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../features/user/userSlice";

const PostAuthor = ({ userId }) => {
  // const users = useSelector(selectAllUsers);
  // const author = users.find((user) => user.id === userId);
  const { author, isLoading } = useGetUsersQuery("getUsers", {
    selectFromResult: ({ data, isLoading }) => ({
      author: data?.entities[userId],
      isLoading
    }),
  });

  return (
    <div className=" text-xs italic">
      by &nbsp;
      {author ? (
        <Link to={`/user/${userId}`} className=" underline">
          {author.name}
        </Link>
      ) : (
        "Unknown Author"
      )}
    </div>
  );
};

export default React.memo(PostAuthor);
