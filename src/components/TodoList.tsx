import React from "react";
import { Todo } from "../model";

interface PropsTodos {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<PropsTodos> = ({ todos, setTodos }: PropsTodos) => {
  return (
    <div className='todos'>
      {todos.map((todo) => (
        <li>{todo.todo}</li>
      ))}
    </div>
  );
};

export default TodoList;
