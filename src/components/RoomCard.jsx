import { Link } from "react-router-dom";

function RoomCard({ room }) {
  return (
    <div className="room-card">

      <img
        src={room.image}
        alt={room.name}
      />

      <div className="room-content">

        <span className="room-type">
          {room.type}
        </span>

        <h3>{room.name}</h3>

        <p>⭐ {room.rating}</p>

        <div className="room-footer">

          <h2>₹{room.price}</h2>

          <Link to={`/room/${room.id}`}>
            <button>View Details</button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default RoomCard;