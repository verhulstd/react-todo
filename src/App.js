import React, { Component } from "react";
import TodoForm from "./components/TodoForm";
import TodoHolder from "./components/TodoHolder";
import base from "./components/Base";

import "./css/app.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      error: false,
      term: "",
      todos: [
        {
          title: "Listen to music",
          checked: false
        },
        {
          title: "Play with kid",
          checked: false
        },
        {
          title: "Swim in ocean",
          checked: false
        },
        {
          title: "Do the dishes",
          checked: true
        },
        {
          title: "Laugh with Tony",
          checked: true
        }
      ]
    };
  }

  //hook into first second when appcomponent is alive
  componentDidMount() {
    this.ref = base.syncState("todos/", {
      context: this,
      state: "todos",
      asArray: true
    });
  }

  handleInputChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  deleteTodo = e => {
    const key = parseInt(e.target.parentElement.getAttribute("index"), 10);
    let todos = this.state.todos;
    const updatedTodos = todos.filter((todo, index) => {
      return index !== key;
    });
    this.setState({
      todos: updatedTodos
    });
  };

  invertCheck = e => {
    const key = parseInt(e.target.parentElement.getAttribute("index"), 10);
    let todos = this.state.todos;
    todos[key].checked = !todos[key].checked;
    this.setState({
      todos: todos
    });
  };

  addTodo = e => {
    e.preventDefault();
    if (this.state.term === "") {
      this.setState({
        error: true
      });
    } else {
      this.setState({
        error: false
      });
      this.setState({
        term: "",
        todos: [
          {
            title: this.state.term,
            checked: false
          },
          ...this.state.todos
        ]
      });
    }
  };

  render() {
    return (
      <div className="App">
        <TodoForm
          term={this.state.term}
          error={this.state.error}
          todos={this.state.todos}
          handleInputChange={this.handleInputChange}
          addTodo={this.addTodo}
        />
        <TodoHolder
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          invertCheck={this.invertCheck}
        />
      </div>
    );
  }
}

export default App;
