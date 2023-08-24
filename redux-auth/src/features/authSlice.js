import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { email: "", accessToken: "" },
  reducers: {
    setCredentials: (state, action) => {
      const { email, accessToken } = action.payload;
      state.email = email;
      state.accessToken = accessToken;
    },
    logout: (state, action) => {
      state.email = "";
      state.accessToken = "";
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentEmail = (state) => state.auth.email;

export const selectCurrentAccessToken = (state) => state.auth.accessToken;
