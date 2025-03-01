import React from "react";
import { Routes, Route } from "react-router-dom";
import "@mantine/core/styles.css";


import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Perferences from "./pages/Preferences";


function App() {
  return (
    <div>
      <Navbar />
      <Perferences />

      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}
export default App;
