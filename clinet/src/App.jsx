import React, { useEffect ,useState} from "react";
import { Routes, Route} from "react-router-dom";
import "@mantine/core/styles.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Toaster } from "sonner";


import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Perferences from "./pages/Preferences";



function App() {
  return (
    <div>
      <Toaster />
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Perferences />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}
export default App;
