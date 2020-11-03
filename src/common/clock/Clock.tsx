import React, { useEffect, useState } from "react";

interface ClockProps {
  offset?: number;
}

export const Clock = ({ offset = 0 }: ClockProps) => {
  const [time, setTime] = useState(Date.now() + offset);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(Date.now() + offset);
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, [offset]);
  
  return <time dateTime={`${time}`}>{time}</time>;
};
