import React,  { useState } from "react";
import {
  FaRegEdit,
  FaPlusSquare,
  FaEye,
  FaUserCircle,
  FaUserCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Welcome_visiteur.css";
import "./Global.css";

import { useNavigate } from 'react-router-dom'; // Pour la navigation

const Welcome2 = () => {
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
            <span className="bienvenue1" >Bienvenue 
            </span>
            <button className="action-button1 creer-test-button1">
              <FaRegEdit className="button-icon1" />
              <span className="button-text1">Créer un test</span>
            </button>

            <button className="action-button1 ajouter-qcm-button1">
              <FaPlusSquare className="button-icon1" />
              <span className="button-text1">Ajouter des QCM</span>
            </button>

            <button className="action-button11 consulter-test-button1">
              <FaEye className="button-icon1" />
              <span className="button-text1">Consulter un test</span>
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

export default Welcome2;
