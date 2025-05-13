import { useState, useRef } from "react";
import styles from "./Stopwatch.module.css";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const toggle = () => {
    if (running) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => setSeconds(prev => prev + 1), 1000);
    }
    setRunning(!running);
  };

  return (
    <div className={styles.stopwatch}>
      <h1>{seconds}s</h1>
      <button onClick={toggle}>{running ? "Dayan" : "Başla"}</button>
    </div>
  );
}
