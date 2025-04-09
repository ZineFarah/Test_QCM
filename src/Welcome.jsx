import React,  { useState } from "react";
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; 
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
            <button className="creer-test-button">  Créer un Test       </button>
            <button className="ajouter-qcm-button">Ajouter des QCM     </button>
            <button className="consulter-test-button">Consulter un Test</button>

            <div className="img-creer-test">
            <img src="/public/creer.png" alt="Icone" />
            </div>

            <div className="img-ajouter-test">
            <img src="/public/ajouter.png" alt="Icone" />
            </div>

            
            <div className="img-consulter-test">
            <img src="/public/consulter.png" alt="Icone" />
            </div>


            <div className="compte-back">
            <img src="/public/compte.png" alt="Icone" />
            </div>
            

            <div>
            {/* Icône de compte */}
            <i className="fas fa-user account-icon" onClick={toggleAccountInfo}></i>

            {/* Informations du compte */}
            {showAccountInfo && (
                <div className="account-info">
                <p>Nom utilisateur : John Doe</p>
                <p>Email : john.doe@example.com</p>
                <button onClick={() => navigate("/manage-account")}>Gérer votre compte</button>
                <button onClick={handleLogout}>Déconnecter</button>                </div>
            )}
            </div>

           

            <div className="image-left">
                <img src="./public/back1.png" alt="Illustration gauche" />
            </div>




            </div>
    
        </div>

    );
};

export default Welcome;
