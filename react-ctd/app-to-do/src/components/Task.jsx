import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../styles/Task.css";

const Task = ({ task, completed, id, completeTask, deleteTask }) => {
  return (
    <div
      className={completed ? "container-task completed-task" : "container-task"}
    >
      <div className="text-task" onClick={() => completeTask(id)}>
        {task}
      </div>
      <div className="container-icons-task" onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className="icon-task" />
      </div>
    </div>
  );
};
export default Task;
