// Importar la biblioteca de react
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './firebase/config'
// Select the  root
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);