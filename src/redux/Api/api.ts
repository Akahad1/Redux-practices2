import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import useGetTodoQuery from "../../../node_modules/@reduxjs/toolkit/dist/query/react/buildHooks";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: "/tasks",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTodosQuery } = baseApi;
