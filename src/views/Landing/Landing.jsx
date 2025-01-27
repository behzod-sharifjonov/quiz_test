import React from "react";
import Navbar from "../../components/Navbar";
import "./Landing.css";
import landing_image from "../../assets/landing_image.svg";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <header className="container">
      <Navbar />
      <div className="header-container">
        <div className="header-text">
          <h2>
            Dasturlashga ilk qadam
            <b>
              {" "}
              FINECH<b style={{ color: "#30a8ff" }}>HUB</b>
            </b>
            'dan boshlanadi
          </h2>
          <div>
          <span>Test orqali siz o'zliginizni toping</span>
          </div>
          <div className="quiz-btn">
            <button onClick={() => navigate("/login")}>Test'ni boshlash</button>
          </div>
        </div>
        <div className="header-image">
          <img src={landing_image} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Landing;
