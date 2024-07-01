import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";

import { Button } from "../../../components/ui/button";

import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { FormEvent, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { useAppDispatch } from "../../hook";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { useAddTodoMutation } from "../../Api/api";

const AddTodoModel = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  // from local starte
  // const dispatch = useAppDispatch();

  const [addTodo, { data, isLoading }] = useAddTodoMutation();
  const [priority, setPriority] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    // const randomString = Math.random().toString().substring(2, 7);
    // console.log({ randomString, task, description });
    const taskDetails = {
      title: task,
      description: description,
      isComplite: false,
      Priority: priority,
    };
    console.log(taskDetails);
    // dispatch(addTodo(taskDetails));
    addTodo(taskDetails);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="font-semibold bg-primary-gradient">
            Add Todo
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={onSubmit}>
            <DialogHeader>
              <DialogTitle>Add Task</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="task" className="text-right">
                  Task
                </Label>
                <Input
                  onBlur={(e) => setTask(e.target.value)}
                  id="task"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  onBlur={(e) => setDescription(e.target.value)}
                  id="descrption"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Priority
                </Label>
                <Select onValueChange={(v) => setPriority(v)}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end">
              <DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTodoModel;
