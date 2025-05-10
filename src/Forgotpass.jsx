import React from "react";
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; 
import "./Forgotpass.css";
import "./Global.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Forgotpass = () => {
    const navigate = useNavigate(); 
    return (
        <div className="global-container">
            <div className="white-box"> 
                {/* Bouton envouer mot de pass */}
                
                <button className="login-button" >Envoyez le lien</button>
                 {/* Images */}
                <div className="image-left">
                <img src="./public/back1.png" alt="Illustration gauche" />
                </div>
                <span className="forgotpass-link" >Mot de passe oublié ?
                </span>
                <span className="text" >Veuillez saisir votre email de connexion afin de recevoir 
                    le lien de résiliation de votre mot de passe.</span>

                {/* Email */}
                <div className="email2-container">
                    <div className="email2-icon">
                    <AiOutlineMail  /> 
                    </div>
                    <div className="email2-input">
                    <input type="email" placeholder="Email" />
                </div>
                </div>
                 {/* Flèche de retour */}
                  <div className="back-arrow" onClick={() => navigate("/")}>
                <FaArrowLeft />
                </div>
                 
         </div>
    
         </div>   

    );
};

export default Forgotpass;