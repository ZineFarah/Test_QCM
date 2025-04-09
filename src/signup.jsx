import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; 
import { Link } from "react-router-dom";
import "./Signup.css";
import "./Global.css";
import { useNavigate } from "react-router-dom";



const Signup = () => {
 
  const navigate = useNavigate(); // Hook pour la navigation

  console.log("Signup page affichée"); // Vérification
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="signup-container">
    <div className="white-box">
      <div className="login-header">
      <span 
        className="login1-link" 
        onClick={() => navigate("/")} // Redirection sans <Link>
        style={{ cursor: "pointer", color: "#8997A7" }} >
        Se connecter</span>         
       <span className="signup1-link">S'inscrire</span>
      </div>
      <div className="nom-container">
           
            <div className="nom-input">
            <input type="text" placeholder="Nom " />

            </div>
            </div>
            <div className="prenom-container">
           
            <div className="prenom-input">
            <input type="text" placeholder="Prenom " />

            </div>
       </div>
      {/* Champ Email */}
      <div className="mail-container">
            <div className="email-icon">
             <AiOutlineMail  /> 
            </div>
            <div className="mail-input">
            <input type="email" placeholder="Email" />
          </div>
       </div>
      {/* Role*/}
      <div className="role-container">
        <label htmlFor="role" className="role-label">Rôle : </label>
        <select id="role" className="role-select">
          <option value="" disabled selected>Choisissez un rôle</option>
          <option value="admin">Administrateur</option>
          <option value="generator">Générateur de test</option>
          <option value="visitor">Vésiteur</option>
        </select>
      </div>

       {/* Mot de passe */}
       <div className="password1-container">
            <div className="password-icon">
              <AiOutlineLock />
            </div>
            <div className="password1-input">
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

           {/* Confirmer mot de passe */}
            
          <div className="passwordconfirm-container">
            <div className="password-icon">
              <AiOutlineLock />
            </div>
            <div className="passwordconfirm-input">
              <input 
                type={showConfirmPassword ? "password" : "email"} 
                placeholder="Confirmer Mot de passe" 
              />
            </div>
            <div 
              className="eye-icon" 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>
           
        {/* Images */}
        <div className="image-left">
          <img src="./public/back1.png" alt="Illustration gauche" />
        </div>

        <div className="image-right">
          <img src="./public/login.jpg" alt="Illustration droite" />
        </div>

         {/* Bouton S'inscrire */}
            <button className="signup-button" onClick={() => navigate("/welcome")}>Créer compte</button>
        
        <div className="login-redirect">
          <span onClick={() => navigate("/")} // Redirection sans <Link>
        style={{ cursor: "pointer", color: "#0B3164" }} >J'ai déjà un compte ? </span>
        </div>

        </div>
    
    </div>
  );
};

export default Signup;