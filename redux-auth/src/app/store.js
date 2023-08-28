import { configureStore } from "@reduxjs/toolkit";
import { publicApiSlice } from "../features/api/publicApiSlice";
import { privateApiSlice } from "../features/api/privateApiSlice";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    [publicApiSlice.reducerPath]: publicApiSlice.reducer,
    [privateApiSlice.reducerPath]: privateApiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(publicApiSlice.middleware),
  // .concat(apiSlice.middleware)
  devTools: true,
});
