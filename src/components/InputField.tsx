import React from "react";
import "./components.css";
const InputField: React.FC = () => {
  return (
    <form className='input'>
      <input type='text' placeholder='Enter a task' className='input-box' />
      <button className='input-button' type='submit'>
        Add
      </button>
    </form>
  );
};

export default InputField;
