import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HotelProvider from "./context/HotelContext";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <App />
);