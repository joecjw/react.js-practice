import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";

const usersAdapter = createEntityAdapter({
  // Assume IDs are stored in a field other than `user.id`
  selectId: (user) => user.id,
  // Keep the "all IDs" array sorted based on user's userId
  sortComparer: (a, b) => a.userId < b.userId,
});

const initialState = usersAdapter.getInitialState({
  loading: "idle",
});

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/user",
      transformResponse: (responseData) => {
        return usersAdapter.setAll(initialState, responseData);
      },
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.ids.map((id) => ({ type: "User", id })),
              { type: "Users", id: "LIST" },
            ]
          : [{ type: "Users", id: "LIST" }],
      keepUnusedDataFor: 1
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;
