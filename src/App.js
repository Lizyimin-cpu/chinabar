import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Menu from "./components/Menu";
import MenuCard from "./components/MenuCard"; 
import OpeningHours from "./components/OpeningHours"; 
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu-card" element={<MenuCard />} />{" "}
        
        <Route path="/opening-hours" element={<OpeningHours />} />{" "}
       
      </Routes>
    </div>
  );
}

export default App;
