import React, { useState, useEffect } from "react";
import TaskForm2 from "../components/TaskForm2";
import { BadgeCheck, BadgeX } from "lucide-react";

const Task2 = ({setProfileXP,setDailyXP,setCompletedTasks, tasks, setTasks}) => {

  // New task 
  const [newTask, setNewTask] = useState({
    date: "",
    startTime: "",
    endTime: "",
    category: "Learning & Growth",
    title: "",
  });

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  // handle new task
  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks((prev) => {
      const dateGroup = prev.find((d) => d.date === newTask.date);
      const taskItem = {
        id: Date.now(),
        ...newTask,
        color: getRandomColor(),
        completed: false,
      };

      if (dateGroup) {
        // Add to existing date
        return prev.map((d) =>
          d.date === newTask.date ? { ...d, items: [...d.items, taskItem] } : d
        );
      } else {
        // New date tasks
        return [...prev, { date: newTask.date, items: [taskItem] }];
      }
    });

    resetForm();
  };

  const getRandomColor = () => {
    const colors = ["#ff69b4", "#40e0d0", "#ffd700", "#98fb98", "#ff7f50"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleAddTask = () => setShowForm((prev) => !prev);

  // Remove a single task item by id
  const handleItemDelete = (date, id) => {
    setTasks((prev) =>
      prev
        .map((d) =>
          d.date === date
            ? { ...d, items: d.items.filter((item) => item.id !== id) }
            : d
        )
        .filter((d) => d.items.length > 0)
    );
  };

  // Mark item complete
  const handleItemComplete = (date, id) => {
    setTasks((prev) =>
      prev.map((d) =>
        d.date === date
          ? {
              ...d,
              items: d.items.map((item) =>
                item.id === id && !item.completed ? { ...item, completed: true } : item
              ),
            }
          : d
      )
    );
    setProfileXP(prev => {
      const updated = prev + 50;
      localStorage.setItem("profileXP", updated);
      return updated;
    });
    setDailyXP((prev) => {
      const updated = prev + 50;
      localStorage.setItem("dailyXP", updated);
      return updated;
    });
    setCompletedTasks(prev => {
      const updated = prev + 1;
      localStorage.setItem("completedTasks", updated);
      return updated;
    }
    );
  };
  

  // Reset form and hide
  const resetForm = () => {
    setNewTask({
      date: "",
      startTime: "",
      endTime: "",
      category: "Learning & Growth",
      title: "",
    });
   setShowForm(false);
  };

  const handleClose = () => {
   setShowForm(false);
  };

  return (
    <div className="task-wrapper">
      <div className="task-header">
        <h1>My Schedule</h1>
        <button className="add-task-btn" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      {showForm && (
        <TaskForm2
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          newTask={newTask}
          handleClose={handleClose}
        />
      )}

      <div className="tasks-list">
        {tasks.map((day) => (
          <div key={day.date} className="day-tasks">
            <div className="date-header">
              <h2>
                {new Date(day.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </h2>
            </div>

            {day.items.map((item) => (
              <div
                key={item.id}
                className={`task-item ${item.completed ? "completed" : ""}`}
              >
                <div className="task-time">
                  {item.startTime} - {item.endTime}
                </div>
                <div
                  className="task-marker"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div className="task-details">
                  <div className="task-category">{item.category}</div>
                  <div className="task-title">{item.title}</div>
                </div>
                <div className="task-actions">
                  <button
                    onClick={() => handleItemComplete(day.date, item.id)}
                    disabled={item.completed}
                    className="complete-btn"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: item.completed ? "not-allowed" : "pointer",
                      opacity: item.completed ? 0.5 : 1,
                      marginLeft: "8px",
                      padding: "0",
                    }}
                  >
                    <BadgeCheck
                      color="#00ffff"
                      size={24}
                      style={{ filter: "drop-shadow(0 0 5px #00ffff)" }}
                    />
                  </button>
                  <button
                    onClick={() => handleItemDelete(day.date, item.id)}
                    className="delete-btn"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                      marginLeft: "8px",
                    }}
                  >
                    <BadgeX
                      color="red"
                      size={24}
                      style={{ filter: "drop-shadow(0 0 5px red)" }}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task2;
