import React,  { useState } from "react";
import {
  FaRegEdit,
  FaPlusSquare,
  FaEye,
  FaUserCircle,
  FaUserCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Welcome.css";
import "./Global.css";

import { useNavigate } from 'react-router-dom'; // Pour la navigation

const Welcome = () => {
    const [showAccountInfo, setShowAccountInfo] = useState(false); // État pour afficher/masquer les infos du compte
  const navigate = useNavigate();

  const toggleAccountInfo = () => {
    setShowAccountInfo(!showAccountInfo); // Afficher/masquer les infos
    
  };
  
  const handleLogout = () => {
    // Tu peux aussi ajouter ici localStorage.clear() si besoin
    navigate("/", { state: { message: "Déconnexion réussie" } });
  };
    return (
        <div className="global-container">
            <div className="white-box"> 
            <span className="bienvenue" >Bienvenue 
            </span>
            <button className="action-button creer-test-button">
              <FaRegEdit className="button-icon" />
              <span className="button-text">Créer un Test</span>
            </button>

            <button className="action-button ajouter-qcm-button">
              <FaPlusSquare className="button-icon" />
              <span className="button-text">Ajouter des QCM</span>
            </button>

            <button className="action-button consulter-test-button">
              <FaEye className="button-icon" />
              <span className="button-text">Consulter un Test</span>
            </button>


            
            
             {/* Icône du compte */}
            <FaUserCircle className="account-icon" onClick={toggleAccountInfo} />
              {/* Informations du compte */}
              {showAccountInfo && (
                <div className="account-info">
                <p>Nom utilisateur : John Doe</p>
                <p>Email : john.doe@example.com</p>
                <button className="account-button" onClick={() => navigate("/manage-account")}> 
                 <FaUserCog className="account-icon-btn" />
                  <span className="button-text">Gérer votre compte</span>
                </button>

                  <button className="account-button" onClick={handleLogout}>
                    <FaSignOutAlt className="account-icon-btn" />
                    <span className="button-text">Déconnecter</span>
                  </button>

              </div>
            )}
            

           

            <div className="image-left">
                <img src="./public/back1.png" alt="Illustration gauche" />
            </div>


            </div>

            
    
        </div>

    );
};

export default Welcome;
