import React, { useContext } from "react";
import "./components.css";
import logo from "../assets/logo-black.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../App";

function Navbar() {
  const navigate = useNavigate();

  const location = useLocation();

  const { setLogin } = useContext(Context);

  return (
    <nav>
      <img onClick={() => navigate("/")} className="logo" src={logo} alt="" />
      <button
        className={`${
          location.pathname == "/"
            ? "none"
            : "flex"
        }`}
        onClick={() => (navigate("/"), setLogin(false))}
      >
        Chiqish
      </button>
    </nav>
  );
}

export default Navbar;
