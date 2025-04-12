import React,  { useState } from "react";
import {
  FaRegEdit,
  FaPlusSquare,
  FaTrash,
  FaEye,
  FaUserCircle,
  FaUserCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Welcome_admin.css";
import "./Global.css";

import { useNavigate } from 'react-router-dom'; // Pour la navigation

const Welcome_admin = () => {
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
            <span className="bienvenue2" >Bienvenue 
            </span>
            <button className="action-button2 creer-test-button2">
              <FaRegEdit className="button-icon2" />
              <span className="button-text2">Créer un test</span>
            </button>

            <button className="action-button2 ajouter-qcm-button2">
              <FaPlusSquare className="button-icon2" />
              <span className="button-text2">Ajouter des QCM</span>
            </button>

            <button className="action-button2 consulter-test-button2">
              <FaEye className="button-icon2" />
              <span className="button-text2">Consulter un test</span>
            </button>
            <button className="action-button2 supprimer-test-button2">
              <FaTrash className="button-icon2" />
              <span className="button-text2">Supprimer test/catégorie</span>
            </button>
            <button className="action-button2 gérer-utilisateurs-button2">
              <FaUserCog className="button-icon2" />
              <span className="button-text2">Gérer les utilisateurs</span>
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

export default Welcome_admin;
