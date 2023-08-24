import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3500",
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

  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");
    //send refresh token to get new access token
    const refreshResult = await baseQuery("/refreshToken", api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      const email = api.getState().auth.email;
      //store the new access token
      api.dispatch(setCredentials(...refreshResult.data, email));
      //retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      console.log(`error: ${result?.error?.originalStatus}`);
      api.dispatch(logout());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
});
