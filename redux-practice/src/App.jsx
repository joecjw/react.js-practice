import AddPostForm from "./components/post/AddPostForm";
import PostList from "./components/post/PostList";
import Layout from "./components/Layout";
import SinglePostPage from "./components/post/SinglePostPage";
import SingleUserPage from "./components/user/SingleUserPage";
import { Routes, Route, Navigate } from "react-router-dom";
import EditPostForm from "./components/post/EditPostForm";
import UserList from "./components/user/UserList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostList />} />
        {/* user routes */}
        <Route path="user">
          <Route index element={<UserList />} />
          <Route path=":userId" element={<SingleUserPage />} />
        </Route>
        {/* post routes */}
        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
        {/* Catch all - 404 error Page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
