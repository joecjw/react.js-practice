import React from "react";
import { useState } from "react";
import { useGetUsersQuery } from "../../features/user/userSlice";
// import { useSelector } from "react-redux";
// import { selectUserById } from "../../features/user/userSlice";

const User = ({ id: userId }) => {
  const [showAddress, setShowAddress] = useState(false);
  const [showCompany, setshowCompany] = useState(false);
  // const user = useSelector((state) => selectUserById(state, userId)); //selector approach
  const {
    user,
    isLoading: isLoadingUser,
    isSuccess: isSuccessUser,
    isError: isErrorUser,
    error: errorUser,
  } = useGetUsersQuery("getUsers", {
    selectFromResult: ({ data, isLoading, isSuccess, isError, error }) => ({
      user: data?.entities[userId],
      isLoading,
      isSuccess,
      isError,
      error,
    }),
  });

  if (!user) {
    return <div>Unknown User</div>;
  }

  return (
    <section className=" border p-2 rounded-md gap-6 flex flex-col items-start justify-center">
      <div>
        <p>Username: {user?.username || "Unknown"}</p>
        <p>Email: {user?.email || "Unknown"}</p>
        <p>Phone: {user?.phone || "Unknown"}</p>
        <p>Website: {user?.website || "Unknown"}</p>
      </div>

      <div className="gap-6 w-full flex flex-row items-start ">
        <div>
          <button
            onClick={() => setShowAddress(!showAddress)}
            className=" border-2 p-1 rounded w-min mb-2"
          >
            Address
          </button>
          {showAddress && (
            <>
              <p>City: {user?.address?.city || "Unknown"}</p>
              <p>Street: {user?.address?.street || "Unknown"}</p>
              <p>Suite: {user?.address?.suite || "Unknown"}</p>
              <p>Zipcode: {user?.address?.zipcode || "Unknown"}</p>
              <div>
                <p>Geo:</p>
                <p>lat: {user?.address?.geo?.lat || "Unknown"}</p>
                <p>lng: {user?.address?.geo?.lng || "Unknown"}</p>
              </div>
            </>
          )}
        </div>
        <div>
          <button
            onClick={() => setshowCompany(!showCompany)}
            className=" border-2 p-1 rounded w-min mb-2 text-center"
          >
            Company
          </button>
          {showCompany && (
            <>
              <p>Bs: {user?.company?.bs || "Unknown"}</p>
              <p>CatchPhrase: {user?.company?.catchPhrase || "Unknown"}</p>
              <p>Name: {user?.company?.name || "Unknown"}</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default React.memo(User);
