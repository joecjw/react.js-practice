import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const publicBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080/api/auth",
});


export const publicApiSlice = createApi({
  baseQuery: publicBaseQuery,
  endpoints: (builder) => ({}),
});
