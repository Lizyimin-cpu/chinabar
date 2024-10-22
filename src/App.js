import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Menu from "./components/Menu"; // 你可能有的现有菜单页面
import MenuCard from "./components/MenuCard"; // 这是我们要跳转到的菜单卡片页面
import OpeningHours from "./components/OpeningHours"; // 这是我们要显示营业时间的页面
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
        {/* 确保这个路径是你跳转的目标 */}
        <Route path="/opening-hours" element={<OpeningHours />} />{" "}
        {/* 确保这是营业时间页面的正确路径 */}
      </Routes>
    </div>
  );
}

export default App;
