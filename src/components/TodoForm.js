import React from "react";
const TodoForm = props => {
  return (
    <form
      className={["todoForm", props.error && "error"].join(" ")}
      onSubmit={props.addTodo}
    >
      <input value={props.term} onChange={props.handleInputChange} />
      <button />
    </form>
  );
};

export default TodoForm;
