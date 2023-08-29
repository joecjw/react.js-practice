import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    accessToken: "",
    refreshToken: "",
    username: "",
    email: "",
    roles: [],
  },
  reducers: {
    setCredentials: (state, action) => {
      const { userId, jwtToken, refreshToken, username, email, roles } =
        action.payload;
      console.log(action);
      state.userId = userId;
      state.accessToken = jwtToken;
      state.refreshToken = refreshToken;
      state.username = username;
      state.email = email;
      state.roles = roles;
    },
    logout: (state, action) => {
      state.userId = null;
      state.accessToken = "";
      state.refreshToken = "";
      state.username = "";
      state.email = "";
      state.roles = [];
    },
  },
});

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: { ...userData },
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    refresh: builder.mutation({
      query: (refreshToken) => ({
        url: "/auth/refreshtoken",
        method: "POST",
        body: { ...refreshToken },
      }),
    }),
  }),
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentAuth = (state) => state.auth;

export const { useRegisterMutation, useLoginMutation, useRefreshMutation } =
  authApiSlice;
