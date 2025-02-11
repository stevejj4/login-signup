import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route for LoginSignup */}
        <Route path="/" element={<LoginSignup />} />
        
        {/* Route for Forgot Password */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
