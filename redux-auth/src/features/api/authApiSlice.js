import { publicApiSlice } from "./apiSlice";

export const publicAuthApiSlice = publicApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: { ...userData },
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    refresh: builder.mutation({
      query: (refreshToken) => ({
        url: "/refreshtoken",
        method: "POST",
        body: { ...refreshToken },
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useRefreshMutation } =
  publicAuthApiSlice;

// export const authApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({}),
// });
