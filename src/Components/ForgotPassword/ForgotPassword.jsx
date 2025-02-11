import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = () => {
    alert(`Password reset link sent to ${email}`);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Forgot Password</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handleReset}>
          Reset Password
        </div>
        <div className="submit gray" onClick={() => navigate("/")}>
          Back to Login
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
