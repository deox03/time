import { useState, useEffect } from "react";
import styles from "./Timer.module.css";

export default function Timer() {
  const [time, setTime] = useState(60);
  const [editing, setEditing] = useState(true);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running && time > 0) {
      const interval = setInterval(() => setTime(t => t - 1), 1000);
      return () => clearInterval(interval);
    } else if (time === 0 && running) {
      alert("Taymer bitdi!");
      setRunning(false);
      setEditing(true);
    }
  }, [running, time]);

  const addTime = (sec) => setTime(t => t + sec);

  return (
    <div className={styles.timer}>
      <h1>{time}s</h1>
      {editing && (
        <>
          <button onClick={() => addTime(10)}>+10s</button>
          <button onClick={() => addTime(60)}>+1 dəq</button>
        </>
      )}
      <button onClick={() => {
        setRunning(!running);
        setEditing(false);
      }}>
        {running ? "Pauza" : "Başla"}
      </button>
    </div>
  );
}
