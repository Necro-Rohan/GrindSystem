import React from "react";
import Feedback from "./Feedback";
import {
  BrainCircuit,
  BicepsFlexed,
  Salad,
  Sparkles,
  BriefcaseBusiness,
  SmartphoneNfc,
  HandCoins,
  MessageCircleHeart,
  SmilePlus,
  Trophy,
  ShieldAlert,
  CircleHelp,
  Castle,
} from "lucide-react";

const SidebarData = [
  {
    title: "Learning & Growth",
    icon: <BrainCircuit />,
    link: "learning",
  },
  {
    title: "Exercise & Movement",
    icon: <BicepsFlexed />,
    link: "exercise",
  },
  {
    title: "Healthy Eating",
    icon: <Salad />,
    link: "healthy",
  },
  {
    title: "Clean & Tidy Life",
    icon: <Sparkles />,
    link: "clean",
  },
  {
    title: "Work & Projects",
    icon: <BriefcaseBusiness />,
    link: "work",
  },
  {
    title: "Less Screen, More Life",
    icon: <SmartphoneNfc />,
    link: "less-screen",
  },
  {
    title: "Money & Habits",
    icon: <HandCoins />,
    link: "money",
  },
  {
    title: "Stay Connected",
    icon: <MessageCircleHeart />,
    link: "connected",
  },
  {
    title: "Mental Check-in",
    icon: <SmilePlus />,
    link: "mental",
  },
  {
    title: "Personal Goals & Challenges",
    icon: <Trophy />,
    link: "personal",
  },
];

const Sidebar = ({
  profileImg,
  profileName,
  profileTitle,
  toggleProfile,
  setCurrentPage,
}) => {
  const [showFeedback, setShowFeedback] = React.useState(false);
  const feedbackHandler = () => setShowFeedback((prev) => !prev);
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-profile-info">
          <div className="sidebar-profile-pic" onClick={toggleProfile}>
            <img src={profileImg} alt="Profile" />
          </div>
          <div className="sidebar-name-title">
            <h1 className="name">{profileName}</h1>
            <p className="title">{profileTitle}</p>
          </div>
        </div>
        <div className="home-container">
          <button
            className="home-btn-wrapper"
            onClick={() => setCurrentPage("home")}
          >
            <div id="home-icon">
              <Castle />
            </div>
            <div id="home-title">Lobby</div>
          </button>
        </div>
        <div className="list-info">Choose your module to evolve.</div>
        <ul className="sidebar-list">
          {SidebarData.map((val, idx) => {
            return (
              <li
                key={idx}
                className="list-item"
                onClick={() => {
                  setCurrentPage(val.link);
                }}
              >
                <div id="sidebar-icon">{val.icon}</div>
                <div id="sidebar-title">{val.title}</div>
              </li>
            );
          })}
        </ul>
        <div className="consern-share">
          <div id="sidebar-icon">
            <ShieldAlert />
          </div>
          <div id="sidebar-title">
            <a href="mailto:rohan.kumar@adypu.edu.in" target="_blank">
              Share a concern
            </a>
          </div>
        </div>
        <div className="help-support" onClick={() => setShowFeedback(true)}>
          <div id="sidebar-icon">
            <CircleHelp />
          </div>
          <div id="sidebar-title">Help & Support</div>
        </div>
      </div>
      {showFeedback && <Feedback handleClose={feedbackHandler} />}
    </>
  );
};

export default Sidebar;
