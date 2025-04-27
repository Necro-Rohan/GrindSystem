import React from 'react'
import CurrentTask from "../components/CurrentTask";
import TodaysTask from "../components/TodaysTask";
import UpcomingQuests from "../components/UpcomingQuests";
import Footer from "../components/Footer";

const WorkProjects = ({ tasks }) => {
  return (
    <>
      <div className="current-task">
        <CurrentTask tasks={tasks} category="Work & Projects" />
      </div>
      <div className="today-task">
        <TodaysTask tasks={tasks} category="Work & Projects" />
      </div>
      <div className="today-task">
        <UpcomingQuests tasks={tasks} category="Work & Projects" />
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </>
  );
}

export default WorkProjects
