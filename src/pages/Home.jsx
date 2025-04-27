import React from 'react';
import StreakTracker from "../components/StreakTracker"
import QuickStats from "../components/QuickStats";
import Greeter from "../components/Greeter";
import CurrentTask from "../components/CurrentTask";
// import "./index.css";
import TodaysTask from "../components/TodaysTask";
import UpcomingQuests from "../components/UpcomingQuests";
import Footer from "../components/Footer";

const Home = ({profileName, profileLevel, tasks, profileTitle, dailyXP, completedTasks, longestStreak, setLongestStreak}) => {
  return (
    <>
      <div className="welcome-greeter">
        <Greeter profileName={profileName} profileTitle={profileTitle} />
      </div>
      <div className="current-task">
        <CurrentTask tasks={tasks} />
      </div>
      <div className="stats-calender-container">
        <div className="stats-container">
          <QuickStats
            profileLevel={profileLevel}
            dailyXP={dailyXP}
            completedTasks={completedTasks}
            longestStreak={longestStreak}
          />
        </div>
        <div className="calender-container">
          <StreakTracker
            longestStreak={longestStreak}
            setLongestStreak={setLongestStreak}
          />
        </div>
      </div>
      <div className="today-task">
        <TodaysTask tasks={tasks} />
      </div>
      <div className="today-task">
        <UpcomingQuests tasks={tasks} />
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </>
  );
}

export default Home
