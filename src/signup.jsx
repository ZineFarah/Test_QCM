import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; 
import { Link } from "react-router-dom";
import "./Signup.css";
import "./Global.css";
import { useNavigate } from "react-router-dom";



const Signup = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');


  const handleSignup = async () => {
    if (motDePasse !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom,
          prenom,
          email,
          mot_de_passe: motDePasse,
          id_role: role === 'admin' ? 1 : role === 'generator' ? 2 : 3
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Compte créé avec succès !");
        navigate("/welcome"); // Retour vers Login
      } else {
        alert(data.message || "Erreur lors de la création du compte.");
      }
    } catch (error) {
      console.error("Erreur requête :", error);
      alert("Erreur serveur !");
    }
  };
  


 
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
            <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />

            </div>
            </div>
            <div className="prenom-container">
           
            <div className="prenom-input">
            <input type="text" placeholder="Prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />

            </div>
       </div>
      {/* Champ Email */}
      <div className="mail-container">
            <div className="email-icon">
             <AiOutlineMail  /> 
            </div>
            <div className="mail-input">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
       </div>
      {/* Role*/}
      <div className="role-container">
        <label htmlFor="role" className="role-label">Rôle : </label>
        <select value={role} onChange={(e) => setRole(e.target.value)} id="role" className="role-select">
        <option value="" disabled selected>Choisissez un rôle</option>
          <option value="admin">Administrateur</option>
          <option value="generator">Modérateur</option>
          <option value="visitor">Utilisateur</option>
        </select>
      </div>

       {/* Mot de passe */}
       <div className="password1-container">
            <div className="password-icon">
              <AiOutlineLock />
            </div>
            <div className="password1-input">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Mot de passe" 
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
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
                type={showConfirmPassword ? "text" : "password"} 
                placeholder="Confirmer Mot de passe" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
         <button className="signup-button" onClick={handleSignup}>Créer compte</button>
        
        <div className="login-redirect">
          <span onClick={() => navigate("/")} // Redirection sans <Link>
        style={{ cursor: "pointer", color: "#0B3164" }} >J'ai déjà un compte ? </span>
        </div>

        </div>
    
    </div>
  );
};

export default Signup;