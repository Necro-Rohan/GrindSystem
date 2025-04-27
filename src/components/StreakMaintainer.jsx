import { useEffect, useState } from "react";

function useStreak() {
  const [streak, setStreak] = useState(0);
  const [lastVisit, setLastVisit] = useState(null);

  useEffect(() => {
    const today = new Date().toDateString();
    const savedData = JSON.parse(localStorage.getItem("streakData"));

    if (savedData) {
      const last = new Date(savedData.lastVisit).toDateString();

      const diffDays = Math.floor(
        (new Date(today) - new Date(last)) / (1000 * 60 * 60 * 24)
      );

      if (diffDays === 0) {
        // Same day
        setStreak(savedData.streak);
      } else if (diffDays === 1) {
        // Consecutive day
        const newStreak = savedData.streak + 1;
        setStreak(newStreak);
        saveToLocalStorage(today, newStreak);
      } else {
        // Missed days
        setStreak(1);
        saveToLocalStorage(today, 1);
      }
    } else {
      // First visit
      saveToLocalStorage(today, 1);
      setStreak(1);
    }

    function saveToLocalStorage(date, streak) {
      localStorage.setItem(
        "streakData",
        JSON.stringify({
          lastVisit: date,
          streak,
        })
      );
      setLastVisit(date);
    }
  }, []);

  return { streak, lastVisit };
}
export default useStreak;