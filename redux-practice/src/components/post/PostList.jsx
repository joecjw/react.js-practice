// import { useSelector } from "react-redux";
// import { selectPostIds } from "../../features/post/postSlice";
import { useGetPostsQuery } from "../../features/post/postSlice";
import Post from "./Post";

const PostList = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery("getPosts");
  // const orderedPostIds = useSelector(selectPostIds);

  let content;
  if (isLoading) {
    content = (
      <div className="loading-component font-bold text-4xl text-blue-600">
        Loading Posts...
      </div>
    );
  } else if (isSuccess) {
    content = posts.ids.map((postId) => (
      <Post key={postId} postId={postId} />
    ));
  } else if (isError) {
    content = (
      <div className="error-component font-bold text-4xl text-blue-600">
        Error: {error}
      </div>
    );
  }

  return (
    <section className="posts-list-container min-w-min w-2/5 bg-blue-400 flex flex-col gap-6 p-6 rounded-xl">
      {content}
    </section>
  );
};

export default PostList;
