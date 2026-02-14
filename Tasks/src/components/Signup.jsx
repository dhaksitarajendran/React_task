import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import bgImage from '../assets/bg.jpg';



const pageStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  fontFamily: "Arial",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh"
};

const boxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(5px)",
  padding: "40px",
  borderRadius: "10px"
};

function Signup() {
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [alertInfo, setAlertInfo] = useState({ show: false, type: "", message: "" });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (Password !== ConfirmPassword) {
      setAlertInfo({ show: true, type: "danger", message: "Passwords do not match" });
      setTimeout(() => setAlertInfo({ ...alertInfo, show: false }), 3000);
      return;
    }
    setAlertInfo({ show: true, type: "success", message: "Signup successful" });
    setTimeout(() => {
      navigate('/bmi');
    }, 1000);
  }

  return (
    <div style={pageStyle}>
      <div style={boxStyle}>
        {alertInfo.show && (
          <div className={`alert alert-${alertInfo.type}`} role="alert" style={{ width: "100%", textAlign: "center" }}>
            {alertInfo.message}
          </div>
        )}
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
          <input
            type="text"
            placeholder="Username"
            required
            style={{ padding: "10px", fontSize: "16px" }}
          />
          <input
            type="email"
            placeholder="Email"
            required
            style={{ padding: "10px", fontSize: "16px" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: "10px", fontSize: "16px" }}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={ConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ padding: "10px", fontSize: "16px" }}
          />
          <button type="Submit" style={{ padding: "10px", fontSize: "16px", cursor: "pointer", backgroundColor: "#4CAF50", color: "white", border: "none" }}>Sign Up</button>
          <p style={{ marginTop: "15px", fontSize: "14px" }}>
            Already have an account?{" "}
            <Link to="/" style={{ color: "DodgerBlue", fontWeight: "bold" }}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup;
