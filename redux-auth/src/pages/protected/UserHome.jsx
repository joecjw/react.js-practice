import { React } from "react";
import { useSelector } from "react-redux";
import { selectCurrentAuth } from "../../features/authSlice";

const UserHome = () => {
  const { accessToken, refreshToken, username, email, roles } =
    useSelector(selectCurrentAuth);

  const showInfo = accessToken && refreshToken && username && email && roles;

  const renderUserCredential = (
    <section className="flex h-full items-center justify-center text-white">
      <div className="flex  flex-col items-center justify-evenly gap-4">
        <h2>Welcome {username}</h2>
        <h3>Here are your Authentication Information:</h3>
        <p>Email: {email}</p>
        <p>User Roles: {roles}</p>
      </div>
    </section>
  );

  return showInfo ? (
    renderUserCredential
  ) : (
    <section>
      <h2>Unknown User</h2>
    </section>
  );
};

export default UserHome;
