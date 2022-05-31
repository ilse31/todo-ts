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
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <form
      className='input'
      onSubmit={(e) => {
        handleAddTodo(e);
        inputRef.current?.blur();
      }}>
      <input
        type='text'
        ref={inputRef}
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
