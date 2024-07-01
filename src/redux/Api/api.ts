import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import useGetTodoQuery from "../../../node_modules/@reduxjs/toolkit/dist/query/react/buildHooks";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }
        return {
          url: `/tasks`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),

    addTodo: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/task",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    UpdateTodo: builder.mutation({
      query: (option) => {
        console.log(option);
        return {
          url: `/task/${option.id}`,
          method: "PUT",
          body: option.data,
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation } =
  baseApi;
