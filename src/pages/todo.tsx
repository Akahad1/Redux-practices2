import React from "react";
import TodoContiner from "../redux/features/todo/TodoContiner";
import Conteriner from "../redux/features/todo/Conteriner";

const Todo = () => {
  return (
    <Conteriner>
      <h1 className=" text-2xl font-semibold text-center m-5 ">My Todo</h1>
      <TodoContiner></TodoContiner>
    </Conteriner>
  );
};

export default Todo;
