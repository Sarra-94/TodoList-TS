import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { addTodo } from "../types";

type AddTask = {
  addTodo: addTodo;
};

const AddTask: FC<AddTask> = ({ addTodo }) => {
  const [task, setTask] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  const handleAdd = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(task);
    setTask("");
  };

  return (
    <form>
      <input type="text" onChange={handleChange} value={task} />
      <button className="add-btn" onClick={handleAdd}>
        +
      </button>
    </form>
  );
};

export default AddTask;
