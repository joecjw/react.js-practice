import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { setCredentials, logout } from "../authSlice";
// import { useRefreshMutation } from "./authApiSlice";

const publicBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080/api/auth",
});

// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:8080/api",
//   credentials: "include",
//   prepareHeaders: (headers, { getState }) => {
//     const accessToken = getState().auth.accessToken;
//     if (accessToken) {
//       headers.set("Authorization", `Bearer ${accessToken}`);
//     }
//     return headers;
//   },
// });

// const baseQueryWithReAuth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result?.error?.originalStatus === 401) {
//     if (result?.error?.data?.message.includes("expired")) {
//       console.log("sending refresh token");
//       //send refresh token to get new access token
//       const refreshResult = await publicBaseQuery(
//         "/refreshtoken",
//         api,
//         extraOptions
//       );
//       console.log(refreshResult);
//       if (refreshResult?.data) {
//         //store the new access token
//         api.dispatch(setCredentials(...refreshResult.data));
//         //retry the original query with new access token
//         result = await baseQuery(args, api, extraOptions);
//       } else {
//         console.log(`error: ${result?.error?.originalStatus}`);
//         api.dispatch(logout());
//       }
//     }
//   }

//   return result;
// };

export const publicApiSlice = createApi({
  baseQuery: publicBaseQuery,
  endpoints: (builder) => ({}),
});

// export const apiSlice = createApi({
//   baseQuery: baseQueryWithReAuth,
//   endpoints: (builder) => ({}),
// });
