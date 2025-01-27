import React, { useContext, useState } from "react";
import "./Auth.css";
import logo from "../../assets/logo-black.svg";
import auth_image from "../../assets/auth_image.svg";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";

function Auth() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const { setLogin } = useContext(Context);

  const sendFormHantler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { name, password } = Object.fromEntries(formData.entries());

    const user_data = {
      name,
      password,
      desc: "quiz",
    };

    // Check credentials
    if (
      user_data.name === "fintechhub" &&
      user_data.password === "dasturlash"
    ) {
      setErrorMessage("");
      navigate("/quiz");
      setLogin(true);
    } else {
      setErrorMessage("Login yoki parol xato!"); // Set error message if credentials are incorrect
    }

    console.log(user_data);
  };

  return (
    <div className="auth">
      <div className="auth-text">
        <div className="auth-title">
          <img src={logo} alt="" />
        </div>
        <div className="auth-form container">
          <form action="" onSubmit={sendFormHantler}>
            <div className="form-input">
              <label htmlFor="name">Login</label>
              <input name="name" type="text" />
            </div>
            <div className="form-input">
              <label htmlFor="password">Parol</label>
              <input placeholder="" name="password" type="password" />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
            {/* Conditionally show error message */}
            <div className="form-btn">
              <button>Started Test</button>
            </div>
          </form>
        </div>
      </div>
      <div className="auth-image">
        <img src={auth_image} alt="" />
      </div>
    </div>
  );
}

export default Auth;
