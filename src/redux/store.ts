import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/TodoSlice";
import { baseApi } from "./Api/api";
export const store = configureStore({
  reducer: {
    todos: todoReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getMiddlewareDefault) =>
    getMiddlewareDefault().concat(baseApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
