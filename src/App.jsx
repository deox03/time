import { BrowserRouter as Router, Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import Clock from "./Clock";
import Timer from "./Timer";
import Stopwatch from "./Stopwatch";
import styles from "./Nav.module.css";

function App() {
  return (

    <BrowserRouter>  
      <div className={styles.nav}>
        <NavLink to="/clock" >Saat</NavLink>
        <NavLink to="/timer" >Taymer</NavLink>
        <NavLink to="/stopwatch" >Saniyəölçən</NavLink>
      </div>

      <Routes>
        <Route path="/clock" element={<Clock />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
      </Routes>
 </BrowserRouter>
  );
}

export default App;
