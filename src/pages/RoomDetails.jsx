import { useParams } from "react-router-dom";

function RoomDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Room Details</h1>
      <h2>Room ID: {id}</h2>
    </div>
  );
}

export default RoomDetails;