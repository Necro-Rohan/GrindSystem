import React from 'react'
import CurrentTask from "../components/CurrentTask";
import TodaysTask from "../components/TodaysTask";
import UpcomingQuests from "../components/UpcomingQuests";
import Footer from "../components/Footer";

const ExerciseMovement = ({tasks}) => {
  return (
    <>
      <div className="current-task">
        <CurrentTask tasks={tasks} category="Exercise & Movement" />
      </div>
      <div className="today-task">
        <TodaysTask tasks={tasks} category="Exercise & Movement" />
      </div>
      <div className="today-task">
        <UpcomingQuests tasks={tasks} category="Exercise & Movement" />
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </>
  );
}

export default ExerciseMovement
