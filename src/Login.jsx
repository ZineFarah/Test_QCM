import React from "react";
import "./Login.css"; // Import du fichier CSS

const Login = () => {
  return (
    <div className="container">
      <div className="login-box">
        {/* Partie gauche */}
        <div className="left-side">
          <h2 className="title active">Se connecter</h2>
          <h2 className="title">S'inscrire</h2>

          <form>
            <div className="input-group">
              <input type="email" placeholder="Email" />
            </div>

            <div className="input-group">
              <input type="password" placeholder="Mot de passe" />
              <span className="eye-icon">👁️</span>
            </div>

            <a href="#" className="forgot-password">
              Mot de passe oublié?
            </a>

            <div className="captcha">
              <input type="checkbox" id="captcha" />
              <label htmlFor="captcha">Je ne suis pas un robot</label>
            </div>

            <button type="submit" className="login-btn">Se connecter</button>
          </form>
        </div>

        {/* Partie droite */}
        <div className="right-side">
          <img src="login.jpg" alt="Security" className="illustration" />
        </div>
      </div>
    </div>
  );
};

export default Login;

