import { useEffect, useState } from "react";
import "../styles/FirstTimeGuide.css"

const FirstTimeGuide = () => {
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowGuide(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  const handleCloseGuide = () => {
    setShowGuide(false);
  };

  if (!showGuide) return null;

  return (
    <div className="guide-overlay">
      <div className="guide-box">
        <img src="/grindsystem-logo2-removebg-preview.png" />
        <h2>Welcome!</h2>
        <p>Here are some tips to get start on your journey.</p>
        <ul>
          <li>Update your profile anytime.</li>
          <li>Add and organize new tasks easily.</li>
          <li>Track your tasks and progress.</li>
          <li>Complete tasks by category.</li>
          <li>Finish daily quests and stay sharp.</li>
          <li>Earn XP as you level up.</li>
          <li>Optimize your time & grind.</li>
          <li>Log out to reset your journey.</li>
        </ul>
        <button onClick={handleCloseGuide}>Let's Get Started!</button>
      </div>
    </div>
  );
};

export default FirstTimeGuide;
