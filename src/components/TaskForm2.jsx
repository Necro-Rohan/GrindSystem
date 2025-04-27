import React from 'react';
import { CircleX } from "lucide-react";


const TaskForm2 = ({ handleSubmit, handleInputChange, newTask, handleClose }) => {
  const [currentTime, setCurrentTime] = React.useState("");

  // const today = new Date().toISOString().split("T")[0];
  const today = new Date().toLocaleDateString("en-CA"); 
  const isEndTimeValid =
    newTask.startTime < newTask.endTime || newTask.endTime === "";
  
  React.useEffect(() => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    setCurrentTime(`${hours}:${minutes}`);
  }, []);
  console.log(today)

  return (
    <div className="task-form-wrapper">
      <div className="form-container">
        <button className="close-btn" onClick={handleClose} type="button">
          <CircleX size={24} />
        </button>
        <form onSubmit={handleSubmit} className="task-form">
          <label htmlFor="title">Quest Name:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={newTask.title}
            onChange={handleInputChange}
            placeholder="Task Title"
            required
          />

          <label htmlFor="date">Date:</label>
          <input
            id="date"
            type="date"
            name="date"
            value={newTask.date}
            min={today}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="startTime">Quest Start:</label>
          <input
            id="startTime"
            type="time"
            name="startTime"
            min={currentTime}
            max="23:59"
            value={newTask.startTime}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="endTime">Quest End:</label>
          <input
            type="time"
            name="endTime"
            id="endTime"
            min={newTask.startTime}
            max="23:59"
            value={newTask.endTime}
            onChange={handleInputChange}
            required
          />
          {!isEndTimeValid && (
            <p className="error">
              Invalid end time: Must be after start and ≤ 11:59 PM.
            </p>
          )}
          <select
            name="category"
            value={newTask.category}
            onChange={handleInputChange}
          >
            <option>Learning & Growth</option>
            <option>Exercise & Movement</option>
            <option>Healthy Eating</option>
            <option>Clean & Tidy Life</option>
            <option>Work & Projects</option>
            <option>Less Screen, More Life</option>
            <option>Money & Habits</option>
            <option>Stay Connected</option>
            <option>Mental Check-in</option>
            <option>Personal Goals & Challenges</option>
          </select>

          <button type="submit" disabled={!isEndTimeValid}>
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm2


