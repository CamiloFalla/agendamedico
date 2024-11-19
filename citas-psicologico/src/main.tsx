import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import App from "./App";
import patients from "./data/patients";
import specialists from "./data/specialists";
import { User } from "./data/types";




// Inicializa usuarios en localStorage y evita duplicados
const initializeUsers = () => {
  const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
  const newUsers = [...patients, ...specialists];

  // Evita duplicados
  const mergedUsers = [...existingUsers, ...newUsers].reduce((acc, user) => {
    if (!acc.find((u: User) => u.email === user.email)) {
      acc.push(user);
    }
    return acc;
  }, []);

  localStorage.setItem("users", JSON.stringify(mergedUsers));
  console.log("Usuarios actualizados en localStorage");
};

initializeUsers();

import { initializeAppointments } from './data/appointments';

// Inicializa las citas precargadas si no existen
initializeAppointments();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
