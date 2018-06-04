import React from "react";
const TodoForm = props => {
  return (
    <form
      className={props.error ? "todoForm error" : "todoForm"}
      onSubmit={props.addTodo}
    >
      <input value={props.term} onChange={props.handleInputChange} />
      <button />
    </form>
  );
};

export default TodoForm;
