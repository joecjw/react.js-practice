import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../authSlice";

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

const refreshQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080/api",
  method: "POST",
  prepareHeaders: (headers, { getState }) => {
    const refreshToken = getState().auth.refreshToken || "";
    headers.set("RefreshToken", refreshToken);
    return headers;
  },
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  console.log(result);
  if (
    result?.error?.data?.status === 401 &&
    result?.error?.data?.path !== "/api/auth/login"
  ) {
    console.log("sending refresh token");
    //send refresh token to get new access token
    const refreshResult = await refreshQuery(
      "/auth/refreshtoken",
      api,
      extraOptions
    );

    console.log(refreshResult);
    if (refreshResult?.data) {
      api.dispatch(setCredentials(refreshResult.data));
      result = async () => {
        return await baseQuery(args, api, extraOptions);
      };
    } else {
      console.log(error);
      api.dispatch(logout());
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
});
