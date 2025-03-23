import React from "react";
import "./Login.css"; // Import du fichier CSS
console.log("Login component loaded");

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        {/* Barre de navigation en haut */}
        <div className="login-header">
          <span className="login-link">Se connecter</span>
          <span className="signup-link">S'inscrire</span>
        </div>

        <h1>Welcome</h1>
        <p>Connectez-vous pour passer</p>
      </div>
    </div>
  );
};

export default Login;
