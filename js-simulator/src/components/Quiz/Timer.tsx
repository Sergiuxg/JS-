import { useEffect, useState } from "react";

interface TimerProps {
  minutes: number;
  onTimeUp: () => void;
}

const Timer = ({ minutes, onTimeUp }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onTimeUp();       // ← aici se termină examenul
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimeUp]);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  return (
    <div className="bg-white px-5 py-3 rounded-xl shadow font-bold">
      ⏱ {String(mins).padStart(2, "0")}:
      {String(secs).padStart(2, "0")}
    </div>
  );
};

export default Timer;