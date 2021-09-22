import { useState, useEffect } from "react";

export default function ResumeControl() {
  const [dateTimeState, setDateTimeState] = useState(
    new Date().toLocaleString()
  );

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDateTimeState(
        new Date().toLocaleTimeString([], {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return <>{dateTimeState}</>;
}
