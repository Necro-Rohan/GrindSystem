import React,{useEffect, useState} from 'react'
import '../styles/Greeter.css'
import { CalendarDays } from "lucide-react";

const Greeter = ({ profileTitle }) => {
  const [dateTimeString, setDateTimeString] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const today = new Date();

      const dateOptions = {
        weekday: "long",
        month: "long",
        day: "numeric",
      };

      const timeOptions = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };

      const formattedDate = today.toLocaleDateString("en-US", dateOptions);
      const formattedTime = today.toLocaleTimeString("en-US", timeOptions);

      setDateTimeString(`${formattedDate}, ${formattedTime}`);
    };

    updateDateTime(); 
    const intervalId = setInterval(updateDateTime, 1000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="panel">
      <div className="text">
        <h2>Welcome back, {profileTitle}!</h2>
        <div className="sub">
          <span className="date">{dateTimeString}</span>
        </div>
      </div>
      <div className="calendar-icon">
        <CalendarDays 
          style={{width: "100%", height: "100%", color: "#08efff"}}
        />
      </div>
    </div>
  );
}

export default Greeter
