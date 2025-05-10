import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; 
import "./Login.css";
import "./Global.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect} from "react";


const Login = () => {
    const navigate = useNavigate(); // Hook pour la navigation
  console.log("Login page affichée"); // Vérification
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);

      // Supprimer le message après 3 secondes
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  
  

  return (
    <div className="global-container">
      <div className="white-box">
        <div className="login-header">
          <span className="login-link">Se connecter</span>
          <span 
        className="signup-link" 
        onClick={() => navigate("/signup")} // Redirection sans <Link>
        style={{ cursor: "pointer", color: "#8997A7" }} >
        S'inscrire
      </span>                
       </div>

       {message && (
          <div style={{
            position: "fixed",
            bottom: "70px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#155724",

            
          }}>{message}</div>
      )}

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
                type={showPassword ? "password" : "email"} 
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
          

          {/* Bouton Se connecter */}
          
            <button className="login-button" onClick={() => navigate("/welcome")}>Se connecter</button>
        
        
        {/* Mot de passe oublié */}
        <span className="forgot-password" 
        onClick={() => navigate("/forgotpass")}
        style={{ cursor: "pointer", color: "#19437A" }} >Mot de passe oublié ?
          </span>


        {/* Images */}
        <div className="image-left">
          <img src="./public/back1.png" alt="Illustration gauche" />
        </div>

        <div className="image-right">
          <img src="./public/login.jpg" alt="Illustration droite" />
        </div>
        </div>
      </div>
    
  );
};

export default Login;