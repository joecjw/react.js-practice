import React from "react";
// import { useSelector } from "react-redux";
// import { selectPostById } from "../../features/post/postSlice";
import { Link, useParams } from "react-router-dom";
import { useGetPostsQuery } from "../../features/post/postSlice";
import PostAuthor from "./PostAuthor";
import PostTime from "./PostTime";
import ReactionButtons from "./ReactionButtons";

const SinglePostPage = () => {
  const { postId } = useParams();
  // const post = useSelector((state) => selectPostById(state, Number(postId)));
  const { post, isLoading } = useGetPostsQuery("getPosts", {
    selectFromResult: ({ data, isLoading }) => ({
      post: data?.entities[postId],
      isLoading,
    }),
  });

  if (isLoading) {
    return (
      <div className=" text-white text-2xl font-semibold">Loading Post...</div>
    );
  }

  if (!post) {
    return (
      <section>
        <h2>Post Not Found!</h2>
      </section>
    );
  }

  return (
    <section className="post-container w-3/5 min-w-min  bg-blue-500 p-2 rounded">
      <article className="post p-4 border-2 border-gray-100 text-gray-100 rounded">
        <div className=" flex flex-col gap-2 font-semibold">
          <h3 className="title capitalize text-2xl font-semibold">
            Title: {post?.title}
          </h3>
          <p className="content">&nbsp;&nbsp;&nbsp;&nbsp;{post?.body}</p>
          <div className=" flex flex-col items-end gap-2">
            <PostAuthor userId={post?.userId} />
            <PostTime timestamp={post?.date} />
          </div>
          <div className=" flex justify-between items-end gap-4 font-semibold">
            <ReactionButtons postId={post?.id} />
            <Link to={`/post/edit/${post?.id}`}>
              <button className=" border-2 rounded p-1 w-20 ">Edit</button>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SinglePostPage;
