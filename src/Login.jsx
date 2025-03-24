import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; 
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <span className="login-link">Se connecter</span>
          <span className="signup-link">S'inscrire</span>
        </div>
        

        <div className="form-container">

          {/* Email */}
          <div className="email-container">
            <div className="email-icon">
             <AiOutlineMail  /> 
            </div>
            <div className="email-input">
            <input type="email" placeholder="Email" />
          </div>
          </div>

          {/* Mot de passe */}
          <div className="password-container">
            <div className="password-icon">
              <AiOutlineLock />
            </div>
            <div className="password-input">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Mot de passe" 
              />
            </div>
            <div 
              className="eye-icon" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>
          {/* Mot de passe oublié */}
          <div className="forgot-password">
               <a href="#">Mot de passe oublié ?</a>
          </div>


          {/* Bouton Se connecter */}
          <div className="button-container">
            <button className="login-button">Se connecter</button>
        </div>

        {/* Images */}
        <div className="image-left">
          <img src="./public/back1.png" alt="Illustration gauche" />
        </div>

        <div className="image-right">
          <img src="./public/login.jpg" alt="Illustration droite" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
