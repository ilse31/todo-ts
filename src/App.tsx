import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.length > 0) {
      setTodos([...todos, { id: todos.length, todo, completed: false }]);
      setTodo("");
    } else {
      alert("Please enter a task");
    }
  };

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <ul className='todo-list'>
        {todos.map((todo) => (
          <li key={todo.id} className='todo-item'>
            {todo.todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
