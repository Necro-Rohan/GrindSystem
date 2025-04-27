import React from 'react'
import CurrentTask from "../components/CurrentTask";
import TodaysTask from "../components/TodaysTask";
import UpcomingQuests from "../components/UpcomingQuests";
import Footer from "../components/Footer";

const CleanTidyLife = ({ tasks }) => {
  return (
    <>
      <div className="current-task">
        <CurrentTask tasks={tasks} category="Clean & Tidy Life" />
      </div>
      <div className="today-task">
        <TodaysTask tasks={tasks} category="Clean & Tidy Life" />
      </div>
      <div className="today-task">
        <UpcomingQuests tasks={tasks} category="Clean & Tidy Life" />
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </>
  );
}

export default CleanTidyLife
