import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isComplite?: boolean;
};

type TinitialState = {
  todos: TTodo[];
};
const initialState: TinitialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isComplite: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => action.payload !== item.id);
    },
    toggleComplite: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((item) => action.payload === item.id);
      task!.isComplite = !task?.isComplite;
    },
  },
});

export const { addTodo, removeTodo, toggleComplite } = todoSlice.actions;
export default todoSlice.reducer;
