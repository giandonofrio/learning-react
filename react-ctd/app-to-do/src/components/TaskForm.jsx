import React from "react";
import "../styles/TaskForm.css";
import { v4 as uuidv4 } from "uuid";

const TaskForm = (onSubmit) => {
  const [input, setInput] = React.useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false,
    };

    onSubmit.onSubmit(newTask);
  };

  return (
    <form className="form-task" onSubmit={handleSubmit}>
      <input
        className="input-task"
        type="text"
        placeholder="Add a task"
        name="task"
        onChange={handleChange}
      />
      <button className="button-task">Add Task</button>
    </form>
  );
};

export default TaskForm;
