function Occupancy() {
  return (
    <div>

      <h2>Occupancy Report</h2>

      <div className="overview-grid">

        <div className="overview-card">
          <h3>Current Occupancy</h3>
          <h2>85%</h2>
        </div>

        <div className="overview-card">
          <h3>Available Rooms</h3>
          <h2>12</h2>
        </div>

        <div className="overview-card">
          <h3>Occupied Rooms</h3>
          <h2>38</h2>
        </div>

      </div>

    </div>
  );
}

export default Occupancy;