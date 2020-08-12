import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends React.Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            My Todo App
          </a>
        </nav>
        <TodoForm  />
        <TodoList  />
      </div>
    );
  }
}

export default App;