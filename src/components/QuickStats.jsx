import React from 'react'
import "../styles/QuickStats.css"

const QuickStats = ({profileLevel, dailyXP, completedTasks, longestStreak}) => {
  return (
    <div className="quick-stats">
      <p className="Qstats-title">Quick Stats</p>
      <div className="stats">
        <h3>LEVEL: {profileLevel}</h3>
        <h3>XP EARNED TODAY: {dailyXP}</h3>
        <h3>QUESTS COMPLETED: {completedTasks}</h3>
        <h3>LONGEST STREAK: {longestStreak} DAYS</h3>
      </div>
    </div>
  );
}

export default QuickStats
