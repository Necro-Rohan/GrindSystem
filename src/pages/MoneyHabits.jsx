import React from 'react'
import CurrentTask from "../components/CurrentTask";
import TodaysTask from "../components/TodaysTask";
import UpcomingQuests from "../components/UpcomingQuests";
import Footer from "../components/Footer";

const MoneyHabits = ({tasks}) => {
  return (
    <>
      <div className="current-task">
        <CurrentTask tasks={tasks} category="Money & Habits" />
      </div>
      <div className="today-task">
        <TodaysTask tasks={tasks} category="Money & Habits" />
      </div>
      <div className="today-task">
        <UpcomingQuests tasks={tasks} category="Money & Habits" />
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </>
  );
}

export default MoneyHabits
