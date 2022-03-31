import "./styles/App.css";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="to-do_app">
      <div className="tasks__header">
        <h1>To-Do</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
