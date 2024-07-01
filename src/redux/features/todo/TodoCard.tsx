import { removeTodo, toggleComplite } from "../TodoSlice";
import { useAppDispatch } from "../../hook";
import { Button } from "../../../components/ui/button";
import UpdateTodoModal from "./UpdateTodoModal";
import { useUpdateTodoMutation } from "../../Api/api";

type TTodoProps = {
  _id: string;
  title: string;
  description: string;
  isComplite?: boolean;
  Priority: string;
};

const TodoCard = ({
  title,
  description,
  _id,
  isComplite,
  Priority,
}: TTodoProps) => {
  const [updateData, { data, isLoading }] = useUpdateTodoMutation();
  const toggle = () => {
    const updatedata = {
      id: _id,
      data: {
        title,
        description,
        isComplite: !isComplite,
        Priority,
      },
    };
    console.log(updatedata);
    updateData(updatedata);
  };
  return (
    <div>
      <div
        onChange={toggle}
        className="bg-white p-5 flex justify-between border"
      >
        <input
          type="checkbox"
          name="complite"
          id="complite"
          defaultChecked={isComplite}
        />
        <p className="font-semibold flex-1 ml-3 mt-2"> {title}</p>
        <div className="flex-1 flex items-center gap-2">
          <div
            className={`rounded-full size-3 
              ${Priority === "High" ? "bg-red-500" : null}
              ${Priority === "Low" ? "bg-green-500" : null}
              ${Priority === "Medium" ? "bg-yellow-500" : null}
            `}
          ></div>
          <p>{Priority}</p>
        </div>
        <div className="flex-1">
          {isComplite ? (
            <p className="font-semibold  text-green-500">Done</p>
          ) : (
            <p className="font-semibold text-red-500">Pending</p>
          )}
        </div>
        <p className="font-semibold flex-[2]">{description}</p>
        <div className="space-x-5 flex">
          <Button
            onClick={() => dispatch(removeTodo(id))}
            className=" bg-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </Button>
          <UpdateTodoModal></UpdateTodoModal>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
