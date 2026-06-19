import { createContext, useState } from "react";

export const HotelContext = createContext();

function HotelProvider({ children }) {
  const [hotelName] = useState("Grand Palace Hotel");

  return (
    <HotelContext.Provider value={{ hotelName }}>
      {children}
    </HotelContext.Provider>
  );
}

export default HotelProvider;