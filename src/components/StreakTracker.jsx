import React from "react";
import { useState, useEffect } from "react";
import useStreak from "./StreakMaintainer";
import "../styles/StreakTracker.css";
import { Flame } from 'lucide-react';


export default function StreakTracker({longestStreak, setLongestStreak}) {
  const { streak } = useStreak();
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const [today, setToday] = useState(localStorage.getItem('today')||"Monday");

  useEffect(() => {
    const updateToday = () => {
      const newToday = new Date().toLocaleDateString("en-US", { weekday: "long" });
      setToday(newToday);
      localStorage.setItem("today", newToday);
    };
    updateToday();
  }, []);

  useEffect(() => {
    const saved = Number(localStorage.getItem("longestStreak") || 0);
    if (saved > longestStreak) {
      setLongestStreak(saved);
    }
  }, [longestStreak, setLongestStreak]);

  useEffect(() => {
    if (streak > longestStreak) {
      setLongestStreak(streak);
      localStorage.setItem("longestStreak", streak);
    }
  }, [streak, longestStreak, setLongestStreak]);

  return (
    <div className="streak-tracker">
      <div className="streak-header">
        <h2 className="streak-title">
          <strong>{streak}</strong> days strong!
        </h2>
        <div className="streak-icon">
          <Flame className="flame-icon" />
        </div>
      </div>
      <div className="streak-description">
        <p>
          {streak >= 100
            ? "You have reached the highest level. Keep coding to maintain your legendary status!"
            : "Keep it going! Each day counts."}
        </p>
      </div>
      <div className="streak-week">
        {days.map((day, i) => {
          const active = day == today ? "active" : "";
          return (
            <div key={i} className={`day ${active}`}>
              {day[0]}
            </div>
          );
        })}
      </div>
    </div>
  );
}
