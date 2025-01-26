import React from "react";
import "./Auth.css";
import logo from "../../assets/logo-black.svg";
import auth_image from '../../assets/auth_image.svg'
import { useNavigate } from "react-router-dom";

function Auth() {

    const navigate = useNavigate()

    const sendFormHantler = e =>{
        e.preventDefault()

        const formData = new FormData(e.target)

        const  {name, phone}= Object.fromEntries(formData.entries())

        const user_data ={
            name,
            phone,
            desc: 'quiz'
        }

        console.log(user_data)

        navigate('/quiz')

    }

  return (
    <div className="auth">
      <div className="auth-text">
        <div className="auth-title">
          <img src={logo} alt="" />
          <span>
            Welcome back! <br />
            Please login/Signup to your account.
          </span>
        </div>
        <div className="auth-form container">
          <form action="" onSubmit={sendFormHantler}>
            <div className="form-input">
              <label htmlFor="name">ismingiz</label>
              <input name="name" type="text" />
            </div>
            <div className="form-input">
              <label htmlFor="phone">telefon raqamingiz</label>
              <input placeholder="" name="phone" type="tel" />
            </div>
            <div className="form-btn">
              <button>Started Test</button>
            </div>
            <div className="auth-social">
              <span>Instagram</span>
              <span>Telegram</span>
              <span>YouTube</span>
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
