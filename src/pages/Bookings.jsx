import { useState } from "react";
import useFetch from "../hooks/useFetch";
import "./Bookings.css";

function Bookings() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [search, setSearch] = useState("");

  if (loading)
    return (
      <div className="loading">
        <h2>Loading Bookings...</h2>
      </div>
    );

  const filteredBookings = data.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bookings-page">

      <div className="booking-header">
        <h1>Booking Management</h1>
        <p>
          Manage hotel reservations, customer details,
          and booking information.
        </p>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <h2>{data.length}</h2>
          <p>Total Bookings</p>
        </div>

        <div className="stat-card">
          <h2>₹ 5.2L</h2>
          <p>Revenue</p>
        </div>

        <div className="stat-card">
          <h2>85%</h2>
          <p>Occupancy</p>
        </div>

        <div className="stat-card">
          <h2>4.8★</h2>
          <p>Guest Rating</p>
        </div>

      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search Guest Name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-container">

        <table className="booking-table">

          <thead>
            <tr>
              <th>Guest Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Room Type</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {filteredBookings.map((user) => (

              <tr key={user.id}>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>{user.phone}</td>

                <td>
                  {
                    [
                      "Deluxe Room",
                      "Luxury Suite",
                      "Executive Room",
                      "Family Room",
                    ][user.id % 4]
                  }
                </td>

                <td>
                  <span
                    className={
                      user.id % 2 === 0
                        ? "status confirmed"
                        : "status pending"
                    }
                  >
                    {user.id % 2 === 0
                      ? "Confirmed"
                      : "Pending"}
                  </span>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Bookings;