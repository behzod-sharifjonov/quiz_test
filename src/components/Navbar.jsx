import React from "react";
import "./components.css";
import logo from "../assets/logo-black.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <img onClick={() => navigate("/")} className="logo" src={logo} alt="" />
      <button onClick={() => navigate("/login")}>Login</button>
    </nav>
  );
}

export default Navbar;
