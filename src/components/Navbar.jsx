import React from "react";
import "./components.css";
import logo from "../assets/logo-black.svg";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const location =  useLocation()

  return (
    <nav>
      <img onClick={() => navigate("/")} className="logo" src={logo} alt="" />
      <button className={`${location.pathname == '/quiz' ? 'none' : 'flex'}`} onClick={() => navigate("/login")}>Login</button>
    </nav>
  );
}

export default Navbar;
