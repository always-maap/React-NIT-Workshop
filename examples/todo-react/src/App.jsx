import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  function onRemoveTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  function onSubmitTask(e) {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    const todoText = formData.get("todo-input");
    const newTasks = [...tasks, todoText];
    setTasks(newTasks);
  }

  return (
    <div className="wrapper">
      <h1 align="center">Todo List</h1>
      <form onSubmit={onSubmitTask} id="todo-form">
        <input
          type="text"
          placeholder="Add a new task"
          name="todo-input"
          id="todo-input"
        />
        <input type="submit" hidden />
      </form>
      <ul id="todo-list">
        {tasks.map((task, index) => (
          <li key={task}>
            {task}
            <button onClick={() => onRemoveTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
