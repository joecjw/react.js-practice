import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/public/Home";
import Signup from "./pages/public/Signup";
import Login from "./pages/public/Login";
import UserHome from "./pages/protected/UserHome";
import RequireAuth from "./components/RequireAuth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* public routes */}
      <Route index element={<Home />} />
      <Route path="register" element={<Signup />} />
      <Route path="login" element={<Login />} />

      {/* protected routes */}
      <Route
        path="myportal"
        element={<RequireAuth allowedRoles={["ROLE_USER", "ROLE_TESTER"]} />}
      >
        <Route index element={<UserHome />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
