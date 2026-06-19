function Overview() {
  return (
    <div>

      <h2>Hotel Overview</h2>

      <div className="overview-grid">

        <div className="overview-card">
          <h3>Today's Check-Ins</h3>
          <h2>24</h2>
        </div>

        <div className="overview-card">
          <h3>Today's Check-Outs</h3>
          <h2>18</h2>
        </div>

        <div className="overview-card">
          <h3>Available Rooms</h3>
          <h2>12</h2>
        </div>

      </div>

      <div className="recent-bookings">

        <h3>Recent Bookings</h3>

        <ul>
          <li>John Smith - Deluxe Room</li>
          <li>Emma Watson - Luxury Suite</li>
          <li>David Miller - Executive Room</li>
          <li>Sarah Johnson - Family Room</li>
        </ul>

      </div>

    </div>
  );
}

export default Overview;