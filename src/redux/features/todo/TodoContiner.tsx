import TodoCard from "./TodoCard";

import AddTodoModel from "./AddTodoModel";
import TodoFilter from "./TodoFilter";
import { useAppSelector } from "../../hook";
import { useGetTodosQuery } from "../../Api/api";

const TodoContiner = () => {
  // const { todos } = useAppSelector((state) => state.todos);
  //from server
  const { data: todos, isLoading } = useGetTodosQuery(undefined);

  if (isLoading) {
    return <p>Loading</p>;
  }
  return (
    <div>
      <div>
        <div className=" mb-5 flex justify-between ">
          <AddTodoModel></AddTodoModel>
          <TodoFilter></TodoFilter>
        </div>
        <div className="bg-primary-gradient rounded-xl w-full  h-full p-3 ">
          <div className=" p-5 bg-white space-y-3">
            {todos?.map((item) => (
              <TodoCard {...item}></TodoCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoContiner;
