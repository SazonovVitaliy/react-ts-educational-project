import React, { FC, MouseEventHandler } from "react";
import { ITodo } from "../types/types";

interface TodoProps {
  todo: ITodo;
  handleChange: (id: number) => void;
  handleRemove: (id: number) => void;
}
const TodoItem: FC<TodoProps> = ({ todo, handleChange, handleRemove }) => {
  return (
    <div>
      {todo.id}.
      <input
        type="checkbox"
        checked={todo.completed}
        onClick={() => handleChange(todo.id)}
      />{" "}
      {todo.title}
      <button onClick={() => handleRemove(todo.id)}>x</button>
    </div>
  );
};

export default TodoItem;
