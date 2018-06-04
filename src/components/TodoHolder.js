import React from "react";
const TodoHolder = props => (
  <ul className="todoHolder">
    {props.todos.map((todo, index) => (
      <li
        className={todo.checked ? "checked" : undefined}
        key={index}
        index={index}
      >
        <span>{todo.title}</span>
        <a className="check" onClick={props.invertCheck}>
          -
        </a>
        <a className="delete" onClick={props.deleteTodo}>
          -
        </a>
      </li>
    ))}
  </ul>
);

export default TodoHolder;
