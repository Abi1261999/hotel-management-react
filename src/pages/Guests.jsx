import { useReducer, useState } from "react";
import { guestReducer } from "../reducer/guestReducer";
import "./Guests.css";

const initialGuests = [
  {
    id: 1,
    name: "John Smith",
    room: "Deluxe Room",
    checkIn: "2026-06-15",
  },
  {
    id: 2,
    name: "Emma Watson",
    room: "Luxury Suite",
    checkIn: "2026-06-18",
  },
  {
    id: 3,
    name: "David Miller",
    room: "Executive Room",
    checkIn: "2026-06-20",
  },
];

function Guests() {
  const [name, setName] = useState("");

  const [guests, dispatch] = useReducer(
    guestReducer,
    initialGuests
  );

  const addGuest = () => {
    if (!name.trim()) return;

    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        name,
        room: "Standard Room",
        checkIn: new Date().toISOString().split("T")[0],
      },
    });

    setName("");
  };

  return (
    <div className="guests-page">

      <div className="guest-header">
        <h1>Guest Management</h1>
        <p>
          Manage hotel guests, reservations,
          and check-in information.
        </p>
      </div>

      <div className="guest-form">

        <input
          type="text"
          placeholder="Enter Guest Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <button onClick={addGuest}>
          Add Guest
        </button>

      </div>

      <div className="guest-table-container">

        <table className="guest-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Room</th>
              <th>Check In</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {guests.map((guest) => (
              <tr key={guest.id}>

                <td>{guest.name}</td>

                <td>{guest.room}</td>

                <td>{guest.checkIn}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() =>
                      dispatch({
                        type: "DELETE",
                        payload: guest.id,
                      })
                    }
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Guests;