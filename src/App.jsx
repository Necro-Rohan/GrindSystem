import React, { useState, useEffect } from "react";
import Profile from "./pages/Profile";
import Sidebar from "./pages/Sidebar";
import Task2 from "./pages/Task2";
import Home from "./pages/Home";
import LearningGrowth from "./pages/LearningGrowth";
import ExerciseMovement from "./pages/ExerciseMovement";
import HealthyEating from "./pages/HealthyEating";
import CleanTidyLife from "./pages/CleanTidyLife";
import WorkProjects from "./pages/WorkProjects";
import LessScreenMoreLife from "./pages/LessScreenMoreLife";
import MoneyHabits from "./pages/MoneyHabits";
import StayConnected from "./pages/StayConnected";
import MentalCheck from "./pages/MentalCheck";
import PersonalGoalsChallenges from "./pages/PersonalGoalsChallenges";
import FirstTimeGuide from "./pages/FirstTimeGuide";
import "./index.css";


function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [profileImg, setProfileImg] = useState(
    localStorage.getItem("profileImg") || "/Sung Jin Woo - icon.jpeg"
  );
  const [profileName, setProfileName] = useState(
    localStorage.getItem("profileName") || "ROHAN KUMAR"
  );
  const [profileBio, setProfileBio] = useState(
    localStorage.getItem("profileBio") ||
      "Just a student grinding XP daily. Logging progress, slaying distractions, and leveling up—one consistent quest at a time."
  );
  const [profileTitle, setProfileTitle] = useState(
    localStorage.getItem("profileTitle") || "Mr. Necro"
  );
  const [profileLevel, setProfileLevel] = useState(
    localStorage.getItem("profileLevel") || 1
  );
  const [profileXP, setProfileXP] = useState(
    Number(localStorage.getItem("profileXP")) || 0
  );
  const [totalProfileXP, setTotalProfileXP] = useState(
    localStorage.getItem("totalProfileXP") || 500
  );
  const [profileProgress, setProfileProgress] = useState(
    localStorage.getItem("profileProgress") || 0
  );
  const [dailyXP, setDailyXP] = useState(
    Number(localStorage.getItem("dailyXP")) || 0
  );
  const [completedTasks, setCompletedTasks] = useState(
    Number(localStorage.getItem("completedTasks")) || 0
  );
  const [longestStreak, setLongestStreak] = useState(
    Number(localStorage.getItem("longestStreak")) || 0
  );
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved
      ? JSON.parse(saved)
      : [
          {
            date: "Apr 20, 2025",
            items: [
              {
                startTime: "05:00",
                endTime: "06:00",
                category: "Personal Goals & Challenges",
                title: "Let's Do Some Grind",
                color: "#ff69b4",
              },
            ],
          },
        ];
  });
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const now = new Date();
    const lastDate = localStorage.getItem("lastXpResetDate");

    const today = now.toISOString().split("T")[0];

    if (lastDate !== today) {
      localStorage.setItem("dailyXP", 0);
      localStorage.setItem("lastXpResetDate", today);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dailyXP", dailyXP);
  }, [dailyXP]);

  useEffect(() => {
    localStorage.setItem("completedTasks", completedTasks);
  }, [completedTasks]);

  const ProfileHandler = () => setShowProfile((prev) => !prev);

  const handleLogout = () => {
    localStorage.clear();
    setProfileImg("/Sung Jin Woo - icon.jpeg");
    setProfileName("ROHAN KUMAR");
    setProfileTitle("Mr. Necro");
    setProfileBio(
      "Just a student grinding XP daily. Logging progress, slaying distractions, and leveling up—one consistent quest at a time."
    );
    setProfileLevel(1);
    setTotalProfileXP(1000);
    setProfileXP(0);
    setProfileProgress(0);
    setDailyXP(0);
    setCompletedTasks(0);
    setLongestStreak(0);
    setShowProfile(false);
    setTasks([
      {
        date: "Apr 20, 2025",
        items: [
          {
            startTime: "05:00",
            endTime: "06:00",
            category: "Personal Goals & Challenges",
            title: "Let's Do Some Grind",
            color: "#ff69b4",
          },
        ],
      },
    ]);
    setCurrentPage("home");
    alert("Logged out successfully!");
  };

  useEffect(() => {
    if (profileXP >= totalProfileXP) {
      const newLevel = Number(profileLevel) + 1;
      const newXP = profileXP - totalProfileXP;
      const newTotalXP = Math.floor(totalProfileXP * 1.25);

      setProfileLevel(newLevel);
      localStorage.setItem("profileLevel", newLevel);

      setProfileXP(newXP);
      localStorage.setItem("profileXP", newXP);

      const progress = Math.floor((newXP / newTotalXP) * 100);
      setProfileProgress(progress);
      localStorage.setItem("profileProgress", progress);

      setTotalProfileXP(newTotalXP);
      localStorage.setItem("totalProfileXP", newTotalXP);

      alert(`Congratulations! You've leveled up to Level ${newLevel}!`);
    } else {
      // Always update progress bar if XP changes
      const progress = Math.floor((profileXP / totalProfileXP) * 100);
      setProfileProgress(progress);
      localStorage.setItem("profileProgress", progress);
    }
  }, [profileXP, totalProfileXP, profileLevel]);

  return (
    <>
      {/* <Feedback/> */}
      <FirstTimeGuide />
      {showProfile ? (
        <Profile
          closeProfile={ProfileHandler}
          profileImg={profileImg}
          setProfileImg={setProfileImg}
          profileName={profileName}
          setProfileName={setProfileName}
          profileTitle={profileTitle}
          setProfileTitle={setProfileTitle}
          profileLevel={profileLevel}
          setProfileLevel={setProfileLevel}
          profileXP={profileXP}
          setProfileXP={setProfileXP}
          totalProfileXP={totalProfileXP}
          setTotalProfileXP={setTotalProfileXP}
          profileProgress={profileProgress}
          setProfileProgress={setProfileProgress}
          profileBio={profileBio}
          setProfileBio={setProfileBio}
          handleLogout={handleLogout}
        />
      ) : (
        <div className="system-container">
          <div className="sidebar-container">
            <Sidebar
              profileImg={profileImg}
              profileName={profileName}
              profileTitle={profileTitle}
              toggleProfile={ProfileHandler}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <div className="main-container">
            {currentPage === "home" && (
              <>
                <Home
                  profileName={profileName}
                  profileTitle={profileTitle}
                  tasks={tasks}
                  profileLevel={profileLevel}
                  dailyXP={dailyXP}
                  completedTasks={completedTasks}
                  longestStreak={longestStreak}
                  setLongestStreak={setLongestStreak}
                />
              </>
            )}
            {currentPage === "learning" && (
              <>
                <LearningGrowth tasks={tasks} />
              </>
            )}
            {currentPage === "exercise" && (
              <>
                <ExerciseMovement tasks={tasks} />
              </>
            )}
            {currentPage === "healthy" && (
              <>
                <HealthyEating tasks={tasks} />
              </>
            )}
            {currentPage === "clean" && (
              <>
                <CleanTidyLife tasks={tasks} />
              </>
            )}
            {currentPage === "work" && (
              <>
                <WorkProjects tasks={tasks} />
              </>
            )}
            {currentPage === "less-screen" && (
              <>
                <LessScreenMoreLife tasks={tasks} />
              </>
            )}
            {currentPage === "money" && (
              <>
                <MoneyHabits tasks={tasks} />
              </>
            )}
            {currentPage === "connected" && (
              <>
                <StayConnected tasks={tasks} />
              </>
            )}
            {currentPage === "mental" && (
              <>
                <MentalCheck tasks={tasks} />
              </>
            )}
            {currentPage === "personal" && (
              <>
                <PersonalGoalsChallenges tasks={tasks} />
              </>
            )}
          </div>
          {currentPage === "home" && (
            <div className="task-container">
              <Task2
                tasks={tasks}
                setTasks={setTasks}
                setProfileXP={setProfileXP}
                setDailyXP={setDailyXP}
                setCompletedTasks={setCompletedTasks}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
