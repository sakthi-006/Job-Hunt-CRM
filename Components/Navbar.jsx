import { FaBriefcase, FaBell, FaUserCircle } from "react-icons/fa";
import "../Styles/Navbar.css";
import "../src/App.css"
function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">

        <FaBriefcase />

        <h2>Job Hunt CRM</h2>

      </div>

      <div className="nav-links">

        <a href="#">Dashboard</a>

        <a href="#">Applications</a>

        <a href="#">Analytics</a>

        <a href="#">Profile</a>

      </div>

      <div className="nav-icons">

        <FaBell className="icon"/>

        <FaUserCircle className="icon profile"/>

      </div>

    </nav>
  );
}

export default Navbar;