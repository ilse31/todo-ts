import React from "react";
import "./components.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({
  todo,
  setTodo,
  handleAddTodo,
}: Props) => {
  return (
    <form className='input' onSubmit={handleAddTodo}>
      <input
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Enter a task'
        className='input-box'
      />
      <button className='input-button' type='submit'>
        Add
      </button>
    </form>
  );
};

export default InputField;
