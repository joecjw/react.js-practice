import React from "react";
import PostAuthor from "./PostAuthor";
import PostTime from "./PostTime";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectPostById } from "../../features/post/postSlice";
import { useGetPostsQuery } from "../../features/post/postSlice";

const Post = ({ postId }) => {
  // const post = useSelector((state) => selectPostById(state, postId));
  const { post } = useGetPostsQuery("getPosts", {
    selectFromResult: ({ data }) => ({
      post: data?.entities[postId],
    }),
  });

  return (
    <article className="post p-4 border-2 border-gray-100 text-gray-100 rounded">
      <div className=" flex flex-col gap-2">
        <h3 className="title capitalize text-2xl font-semibold">
          Title: {post?.title}
        </h3>
        <p className="content">{post.body.substring(0, 75)}...</p>
        <div className=" flex flex-col items-end gap-2">
          <PostAuthor userId={post?.userId} />
          <PostTime timestamp={post?.date} />
        </div>
        <div className=" flex justify-between items-end gap-4 font-semibold">
          <ReactionButtons postId={post?.id} />
          <Link to={`post/${post?.id}`}>
            <button className=" border-2 rounded p-1 text-sm w-28 ">
              View Full Post
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default React.memo(Post);
