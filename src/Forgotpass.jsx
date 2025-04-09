import React from "react";
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; 
import "./Forgotpass.css";
import "./Global.css";


const Forgotpass = () => {


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
        
                 
         </div>
    
         </div>   

    );
};

export default Forgotpass;