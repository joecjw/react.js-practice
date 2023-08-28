import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: "",
    refreshToken: "",
    username: "",
    email: "",
    roles: [],
  },
  reducers: {
    setCredentials: (state, action) => {
      const { jwtToken, refreshToken, username, email, roles } = action.payload;
      state.accessToken = jwtToken;
      state.refreshToken = refreshToken;
      state.username = username;
      state.email = email;
      state.roles = roles;
    },
    logout: (state, action) => {
      state.accessToken = "";
      state.refreshToken = "";
      state.username = "";
      state.email = "";
      state.roles = [];
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentAuth = (state) => state.auth;
