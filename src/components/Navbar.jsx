import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <span className="logo-icon">🏨</span>
        <h2>Grand Palace</h2>
      </div>

      <nav className="nav-links">

        <NavLink to="/">Home</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/rooms">Rooms</NavLink>

        <NavLink to="/guests">Guests</NavLink>

        <NavLink to="/bookings">Bookings</NavLink>

        <NavLink to="/dashboard">Dashboard</NavLink>

        <NavLink to="/contact">Contact</NavLink>

      </nav>

      <div className="nav-buttons">
        <button className="book-btn">
          Book Now
        </button>
      </div>

    </header>
  );
}

export default Navbar;