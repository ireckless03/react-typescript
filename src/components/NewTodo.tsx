import React, { useRef } from "react";

type NewTodoProps = {
  onAddToDo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;
    props.onAddToDo(enteredText);
    console.log(enteredText, " was enetered"); 
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef}></input>
      </div>
      <button type="submit">Add TODO</button>
    </form>
  );
};

export default NewTodo;
