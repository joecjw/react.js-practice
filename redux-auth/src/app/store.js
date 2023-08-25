import { configureStore } from "@reduxjs/toolkit";
import { publicApiSlice } from "../features/api/apiSlice";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    [publicApiSlice.reducerPath]: publicApiSlice.reducer,
    // [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(publicApiSlice.middleware),
  // .concat(apiSlice.middleware)
  devTools: true,
});
