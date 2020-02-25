import React from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="main-head">
        <div className="head">
          <i className="fas fa-list" />
          <span style={{ fontSize: "40px" }}> To-Do App !</span>
          <br />
          <br />
          <span style={{ fontSize: "20px" }}>Add new To-Do</span>
          <br />
        </div>
        <Form />
      </div>
      <div className="division">Let's get some work done !</div>
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
