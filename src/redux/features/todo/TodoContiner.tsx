import TodoCard from "./TodoCard";

import AddTodoModel from "./AddTodoModel";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "../../Api/api";
import { useState } from "react";

const TodoContiner = () => {
  // const { todos } = useAppSelector((state) => state.todos);
  const [priority, setPriority] = useState("");
  //from server
  const { data: todos, isLoading } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>Loading</p>;
  }
  console.log(todos);
  return (
    <div>
      <div>
        <div className=" mb-5 flex justify-between ">
          <AddTodoModel></AddTodoModel>

          <TodoFilter
            priority={priority}
            setPriority={setPriority}
          ></TodoFilter>
        </div>
        <div className="bg-primary-gradient rounded-xl w-full  h-full p-3 ">
          <div className=" p-5 bg-white space-y-3">
            {todos?.data?.map((item) => (
              <TodoCard key={item._id} {...item}></TodoCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoContiner;
