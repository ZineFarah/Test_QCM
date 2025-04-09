import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Forgotpass from "./Forgotpass";
import Welcome from "./Welcome";
import ManageAccount from "./ManageAccount";  // Composant pour gérer le compte
import Logout from "./Logout";  // Composant de déconnexion


function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpass" element={<Forgotpass />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/manage-account" element={<ManageAccount />} />
          <Route path="/logout" element={<Logout />} />
          
        </Routes>
      </Router>
    );
  }
  
  export default App;
