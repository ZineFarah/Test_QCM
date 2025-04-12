import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Forgotpass from "./Forgotpass";
import Welcome_admin from "./Welcome_admin";
import Welcome from "./Welcome";
import ManageAccount from "./ManageAccount";  // Composant pour gérer le compte
import Welcome2 from "./Welcome2";


function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpass" element={<Forgotpass />} />
          <Route path="/welcome" element={<Welcome />} />
          {/*<Route path="/Welcome_admin" element={<Welcome_admin />}/>*/}
          <Route path="/welcome2" element={<Welcome2 />} />
          <Route path="/manage-account" element={<ManageAccount />} />
          
        </Routes>
      </Router>
    );
  }
  
  export default App;
