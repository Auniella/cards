import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import plongeonImage from "./Assets/images/Plongeon orange.jpg";
// import cassetteImage from "./Assets/images/Cassette.jpg";
// import parisImage from "./Assets/images/Paris.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));

const DATA = [
  {
    id: "card-1",
    imageUrl: "./Assets/images/Plongeon orange.jpg",
    titre: "titre",
    details: "details",
  },
  {
    id: "card-2",
    imageUrl: "./Assets/images/Cassette.jpg",
    titre: "titre",
    details: "details",
  },
  {
    id: "card-3",
    imageUrl: "./Assets/images/Paris.jpg",
    titre: "titre",
    details: "details",
  },
];
root.render(
  <React.StrictMode>
    <App cards={DATA} />
  </React.StrictMode>
);
