import rooms from "../data/rooms";
import RoomCard from "../components/RoomCard";
import "./Rooms.css";

function Rooms() {
  return (
    <div className="rooms-page">
      <div className="rooms-header">
        <h1>Luxury Rooms & Suites</h1>
        <p>
          Discover premium accommodation designed for comfort,
          elegance and unforgettable experiences.
        </p>
      </div>

      <div className="rooms-grid">
        {rooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
          />
        ))}
      </div>
    </div>
  );
}

export default Rooms;