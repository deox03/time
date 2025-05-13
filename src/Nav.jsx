import { NavLink } from "react-router-dom";

 function Nav() {
  return (
    <div style={{ display: "flex", gap: "3rem", padding: "2rem" }}>
      <NavLink to="/" style={({ isActive }) => ({ backgroundColor: isActive ? "#a020f0" : "transparent", padding: "1rem", borderRadius: "10px", color: isActive ? "#fff" : "#000" })}>Saat</NavLink>
      <NavLink to="/stopwatch">Saniyəölçən</NavLink>
      <NavLink to="/timer">Taymer</NavLink>
    </div>
  );
}
export default Nav