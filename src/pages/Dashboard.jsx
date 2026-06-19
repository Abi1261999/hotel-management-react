import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">

      <div className="dashboard-header">
        <h1>Hotel Management Dashboard</h1>
        <p>
          Monitor hotel performance, bookings,
          revenue, and occupancy statistics.
        </p>
      </div>

      <div className="dashboard-stats">

        <div className="dashboard-card">
          <h2>50</h2>
          <p>Total Rooms</p>
        </div>

        <div className="dashboard-card">
          <h2>120</h2>
          <p>Total Guests</p>
        </div>

        <div className="dashboard-card">
          <h2>85</h2>
          <p>Bookings</p>
        </div>

        <div className="dashboard-card">
          <h2>₹5.2L</h2>
          <p>Revenue</p>
        </div>

      </div>

      <div className="dashboard-nav">

        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            isActive ? "active-tab" : ""
          }
        >
          Overview
        </NavLink>

        <NavLink
          to="/dashboard/revenue"
          className={({ isActive }) =>
            isActive ? "active-tab" : ""
          }
        >
          Revenue
        </NavLink>

        <NavLink
          to="/dashboard/occupancy"
          className={({ isActive }) =>
            isActive ? "active-tab" : ""
          }
        >
          Occupancy
        </NavLink>

      </div>

      <div className="dashboard-content">
        <Outlet />
      </div>

    </div>
  );
}

export default Dashboard;