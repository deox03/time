import { useEffect, useState } from "react";
import styles from "./Clock.module.css";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return <h1 className={styles.clock}>{time.toLocaleTimeString()}</h1>;
}
