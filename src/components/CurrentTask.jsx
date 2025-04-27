import React from 'react'
import { BookMarked, Zap, ArrowBigRightDash } from "lucide-react";
import '../styles/CurrentTask.css';

const CurrentTask = ({ tasks, category }) => {
  
  const firstUncompletedTask = tasks
    .flatMap((day) => day.items) 
    .find((item) => {
      const isNotCompleted = !item.completed;
      const isMatchingCategory = category ? item.category === category : true;
      return isNotCompleted && isMatchingCategory;
     });
 
  return (
    <div className="current-task-wrapper">
      {firstUncompletedTask ? (
        <>
          <div className="current-task-left">
            <div className="current-task-icon">
              <BookMarked size={24} />
            </div>
            <h3 className="current-task-title">
              Grind Progress In Motion:{" "}
              <span>{firstUncompletedTask.title}</span>
            </h3>
          </div>
          <div className="current-task-right">
            <div className="current-task-xp-icon">
              <Zap
                size={24}
                style={{
                  filter: "drop-shadow(0 0 5px #ffd503)",
                  color: "gold",
                }}
              />
            </div>
            <div className="current-task-xp">
              {firstUncompletedTask.completed ? "50/50" : "0/50"}
            </div>
            <div className="current-task-arrow">
              <ArrowBigRightDash
                size={30}
                style={{
                  filter: "drop-shadow(0 0 5px #00ffff)",
                  color: "white",
                }}
              />
            </div>
          </div>
        </>
      ) : (
        <h3 className="grind-achieved">
          Grind Achieved: No Pending Actions! 👑 You've earned your rest,
          legend!
        </h3>
      )}
    </div>
  );
}

export default CurrentTask
