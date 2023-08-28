import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../authSlice";
import { useRefreshMutation } from "./authApiSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const accessToken = getState().auth.accessToken;
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 401) {
    if (result?.error?.data?.message.includes("expired")) {
      console.log("sending refresh token");
      //send refresh token to get new access token
      const refresh = useRefreshMutation();
      const { data } = await refreshResult("dummy refreshtoken")
        .unwarp()
        .then(async (data) => {
          console.log(data);
          //store the new access token
          api.dispatch(setCredentials(...refreshResult.data));
          //retry the original query with new access token
          result = await baseQuery(args, api, extraOptions);
        })
        .catch((error) => {
          console.log(`error: ${error?.originalStatus}`);
          api.dispatch(logout());
        });
    }
  }
  return result;
};

export const privateApiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
});
