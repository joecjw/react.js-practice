import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { selectPostById } from "../../features/post/postSlice";
// import { selectAllUsers } from "../../features/user/userSlice";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetPostsQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
} from "../../features/post/postSlice";
import { useGetUsersQuery } from "../../features/user/userSlice";

const EditPostForm = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  // const post = useSelector((state) => selectPostById(state, Number(postId)));
  // const users = useSelector(selectAllUsers);

  const {
    post,
    isLoadingPosts,
    isSuccessPosts,
  } = useGetPostsQuery("getPosts", {
    selectFromResult: ({ data, isLoading, isSuccess }) => ({
      post: data?.entities[postId],
      isLoadingPosts: isLoading,
      isSuccessPosts: isSuccess,
    }),
  });

  const { data: users, isSuccess: isSuccessUsers } =
    useGetUsersQuery("getUsers");

  const [updatePost, { isLoading: isUpdating }] =
    useUpdatePostMutation("updatePost");
  const [deletePost, { isLoading: isDeleting }] =
    useDeletePostMutation("deletePost");

  const INIT_TITLE = post?.title || "";
  const INIT_BODY = post?.body || "";
  const INIT_AUTHOR = post?.userId || null;

  const [title, setTitle] = useState(INIT_TITLE);
  const [body, setBody] = useState(INIT_BODY);
  const [userId, setUserId] = useState(INIT_AUTHOR);

  useEffect(() => {
    if (isSuccessPosts) {
      setTitle(post?.title);
      setBody(post?.body);
      setUserId(post?.userId);
    }
  }, [isSuccessPosts, post?.title, post?.body, post?.userId]);

  if (!post) {
    return (
      <section>
        <h2 className=" text-2xl font-semibold text-white">Post Not Found!</h2>
      </section>
    );
  }

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onBodyChanged = (e) => setBody(e.target.value);
  const onAuthorChanged = (e) => setUserId(Number(e.target.value));

  const canSave =
    [title, body].every(Boolean) &&
    !isUpdating &&
    (title !== INIT_TITLE || body !== INIT_BODY || userId !== INIT_AUTHOR);

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        await updatePost({
          ...post,
          id: post.id,
          title,
          body,
          userId,
        }).unwrap();
        setTitle("");
        setBody("");
        setUserId("");
        navigate(`/post/${postId}`);
      } catch (error) {
        console.error("Fail to Save the Post", error);
      }
    }
  };

  const onDeletePostClicked = async () => {
    if (!isDeleting) {
      try {
        await deletePost({ id: post.id }).unwrap();
        setTitle("");
        setBody("");
        setUserId("");
        navigate("/");
      } catch (error) {
        console.error("Fail to Delete the post, error");
      }
    }
  };

  let userOptions;
  if (isSuccessUsers) {
    userOptions = users.ids.map((userId) => {
      return (
        <option key={userId} value={userId} className=" font-semibold">
          {users.entities[userId].name}
        </option>
      );
    });
  }

  return (
    <section className="edit-post-form w-3/5 min-w-min max-h-min min-h-min p-6 rounded-2xl text-lg text-white font-semibold bg-blue-400 flex flex-col items-center justify-center gap-4">
      <form className="form-body flex flex-col gap-6 w-full h-full">
        <div className="flex flex-col">
          <label htmlFor="postAuthor">Post Author:</label>
          <select
            id="postAuthor"
            name="postAuthor"
            defaultValue={userId}
            onChange={onAuthorChanged}
            className=" rounded text-blue-900 p-1 shadow"
          >
            <option value="" disabled>
              Please Select the Author
            </option>
            {userOptions || "No User Found"}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
            className="rounded text-blue-900 p-1 shadow"
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="postBody">Content:</label>
          <textarea
            id="postBody"
            name="postBody"
            value={body}
            onChange={onBodyChanged}
            className="rounded text-blue-900 p-1 shadow h-44 "
          />
        </div>
      </form>
      <button
        type="button"
        onClick={onSavePostClicked}
        disabled={!canSave}
        className=" px-2 py-1 mt-2 w-fit rounded-lg border-2 disabled:opacity-50 enabled:opacity-100 enabled:transition"
      >
        Save Post
      </button>
      <button
        type="button"
        onClick={onDeletePostClicked}
        className=" px-2 py-1 mt-2 w-fit rounded-lg border-2  bg-red-400 disabled:opacity-50 enabled:opacity-100 enabled:transition"
      >
        Delete Post
      </button>
    </section>
  );
};

export default EditPostForm;
