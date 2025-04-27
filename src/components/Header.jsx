import React,{useState} from "react";
import { PanelLeftOpen } from "lucide-react";
import { PanelRightOpen } from "lucide-react";
import Sidebar from "./Sidebar";

const Header = ({ toggleProfile, profileName, profileImg, profileTitle }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const today = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);

  return (
    <>
      <header>
        <div className="sidebar-logo">
          {!showSidebar ? (
            <PanelLeftOpen
              size={24}
              onClick={() => setShowSidebar((prev) => !prev)}
            />
          ) : (
            <PanelRightOpen
              size={24}
              onClick={() => setShowSidebar((prev) => !prev)}
            />
          )}
          <h1
            className="header-title"
            onClick={() => (window.location.href = "#")}
          >
            SYSTEM
          </h1>
        </div>
        <div className="header-date-profile">
          <p>{formattedDate}</p>
          <div className="profile-icon-container" onClick={() => {
            console.log("toggleProfile called");
            toggleProfile();
          }}>
            <img
              src="/profile.png"
              alt="Profile"
              className="profile-icon static"
            />
            <img
              src="/profile.gif"
              alt="Profile Hover"
              className="profile-icon animated"
            />
          </div>
        </div>
      </header>
      {showSidebar &&
        <Sidebar
        profileImg={profileImg}
        profileName={profileName}
        profileTitle={profileTitle}
      />}
    </>
  );
};

export default Header;