import React from "react";
import TaskForm from "./TaskForm";
import "../styles/TaskList.css";
import Task from "./Task";

const TaskList = () => {
  const [tasks, setTask] = React.useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      setTask([task, ...tasks]);
    }
  };

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };
  const completeTask = (id) => {
    setTask(
        tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )
    );  };

  return (
    <>
      <TaskForm addTask={addTask} onSubmit={addTask} />
      <div className="container-tasklist">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            task={task.text}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
      </div>
    </>
  );
};

export default TaskList;
