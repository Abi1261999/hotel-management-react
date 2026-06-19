export const guestReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      return state.filter(
        (guest) => guest.id !== action.payload
      );

    default:
      return state;
  }
};