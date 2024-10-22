import React from "react";
import { useNavigate } from "react-router-dom";
import HomeImage from "../images/a8f78dbead98c10b2fa3984.jpg_1280_1280_3_faa9.webp";  

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome to ChinaBar</h1>
      <p>
        Food from all over China: Sichuan cuisine, Guangdong cuisine, Shandong
        cuisine
      </p>
      <button onClick={() => navigate("/menu-card")}>View Menu Card</button>{" "}
      {/* 这将跳转到MenuCard页面 */}
      <button onClick={() => navigate("/opening-hours")}>
        Opening Hours
      </button>{" "}
      {/* 这将跳转到OpeningHours页面 */}
      <img
        src={HomeImage}
        alt="Homeimage"
        style={{ width: "800px" }}
      />
    </div>
  );
};

export default Home;
