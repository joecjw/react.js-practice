import { useState } from "react";
// import { useSelector } from "react-redux";
// import { selectAllUsers } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useAddNewPostMutation } from "../../features/post/postSlice";
import { useGetUsersQuery } from "../../features/user/userSlice";

const AddPostForm = () => {
  const navigate = useNavigate();
  const [addNewPost, { isLoading }] = useAddNewPostMutation("addNewPost");

  // const users = useSelector(selectAllUsers); //selector approach
  const { data: users, isSuccess } = useGetUsersQuery("getUsers");

  const [title, setTitle] = useState("Enter the Post Title");
  const [body, setBody] = useState("Enter the Post Content here");
  const [userId, setUserId] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onBodyChanged = (e) => setBody(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave =
    [title, body].every(Boolean) &&
    title !== "Enter the Post Title" &&
    body !== "Enter the Post Content here" &&
    !isLoading;

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        await addNewPost({ title, body, userId }).unwrap();
        setTitle("");
        setBody("");
        setUserId("");
        navigate("/");
      } catch (error) {
        console.error("Fail to Save the New Post", error);
      }
    }
  };

  let userOptions;
  if (isSuccess) {
    userOptions = users.ids.map((userId) => {
      return (
        <option key={userId} value={userId} className=" font-semibold">
          {users.entities[userId].name}
        </option>
      );
    });
  }

  return (
    <section className="add-post-form p-6 rounded-2xl text-lg text-white font-semibold bg-blue-400 flex flex-col items-center justify-center gap-4">
      <h2 className="form-title text-2xl font-extrabold">Add a New Post</h2>
      <form className="form-body flex flex-col gap-6">
        <div className="flex flex-col">
          <label htmlFor="postAuthor">Post Author:</label>
          <select
            id="postAuthor"
            name="postAuthor"
            value={userId}
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
            className="rounded text-blue-900 p-1 shadow w-64 h-32"
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
    </section>
  );
};

export default AddPostForm;
