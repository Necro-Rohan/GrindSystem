import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import "../styles/tasks.css"

function DailyTasks() {
  const [dailyTasks, setDailyTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setDailyTasks((prev) => [...prev, newTask]);
  };

  return (
    <div className="daily-tasks">
      <TaskForm taskType="daily" onSubmit={handleAddTask} />

      <ul>
        {dailyTasks.map((task, i) => (
          <li key={i}>
            <strong>{task.name}</strong> — {task.category} — {task.xp} XP
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DailyTasks;
