import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import Guests from "./pages/Guests";
import Bookings from "./pages/Bookings";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Overview from "./Dashboard/Overview";
import Revenue from "./Dashboard/Revenue";
import Occupancy from "./Dashboard/Occupancy";

console.log(Overview);
console.log(Revenue);
console.log(Occupancy);


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/rooms" element={<Rooms />} />

        <Route path="/room/:id" element={<RoomDetails />} />

        <Route path="/guests" element={<Guests />} />

        <Route path="/bookings" element={<Bookings />} />

        <Route path="/contact" element={<Contact />} />

      <Route path="/dashboard" element={<Dashboard />}>
  <Route index element={<Overview />} />
  <Route path="revenue" element={<Revenue />} />
  <Route path="occupancy" element={<Occupancy />} />
</Route>
       

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;