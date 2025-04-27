import React from "react";
import { ArrowBigRightDash, ClockFading, Zap } from "lucide-react";
import "../styles/TodaysTask.css"

const TodaysTask = ({ tasks, category }) => {
  const today = new Date().toLocaleDateString("en-CA"); 
  const uncompletedTasks = tasks
    .flatMap((day) => day.items)
    .filter(
      (item) => {
        const isNotCompleted = !item.completed;
        const isToday = item.date === today;
        const isMatchingCategory = category ? item.category === category : true;
        return isToday && isNotCompleted && isMatchingCategory;
      });

  return (
    <div className="todays-tasks">
      <div className="todays-task-icon-title">
        <div className="clock-icon">
          <ClockFading />
        </div>
        <div className="todays-task-title">
          <h3>Daily Quests</h3>
          <p>{uncompletedTasks.length > 0 && 'Quests queued: Awaiting dispatch'}</p>
        </div>
      </div>

      <div className="todays-task-wrapper">
        {uncompletedTasks.length > 0 ? (
          uncompletedTasks.map((item) => (
            <div key={item.id} className="todays-task-cards">
              <h4>{item.category}</h4>
              <h3>{item.title}</h3>
              <p>
                {item.startTime} to {item.endTime}
              </p>
              <div className="todays-task-progress">
                <div className="todays-task-progress-icon">
                  <Zap
                    size={24}
                    style={{
                      filter: "drop-shadow(0 0 5px #ffd503)",
                      color: "gold",
                    }}
                  />
                </div>
                <div className="todays-task-progress-count">
                  {item.completed ? "50/50" : "0/50"}
                </div>
                <div className="todays-task-progress-action">
                  Let's Do it
                  <ArrowBigRightDash
                    size={30}
                    style={{
                      filter: "drop-shadow(0 0 5px #00ffff)",
                      color: "white",
                    }}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state-img">
            <img src="/tasks-completed.png" alt="task completed" />
            <p className="empty-title">
              You're all clear!
            </p>
            <p className="empty-title">
              Add a new task to begin.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodaysTask;
