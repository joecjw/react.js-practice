import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthProvider";
import AuthInfo from "./components/AuthInfo";
import RequireAuth from "./components/RequireAuth";
import UserList from "./components/UserList";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* public routes */}
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />

            {/* protected routes */}
            <Route
              element={
                <RequireAuth allowedRoles={["ROLE_USER", "ROLE_TESTER"]} />
              }
            >
              <Route path="user-auth-info" element={<AuthInfo />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={"ROLE_TESTER"} />}>
              <Route path="users" element={<UserList />} />
            </Route>

            {/* catch all */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
