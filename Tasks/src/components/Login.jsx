import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bgImage from '../assets/bg.jpg';


const pageStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  fontFamily: "Arial",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};
const boxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  padding: "40px",
  borderRadius: "10px"
};

function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [alertInfo, setAlertInfo] = useState({ show: false, type: "", message: "" });
  const navigate = useNavigate();
  const handlelogin = (e) => {
    e.preventDefault();
    if (Username === "admin" && Password === "1234") {
      setAlertInfo({ show: true, type: "success", message: "Login successful" });
      setTimeout(() => {
        navigate('/bmi');
      }, 1000);
    }
    else {
      setAlertInfo({ show: true, type: "danger", message: "No account found" });
      setTimeout(() => setAlertInfo({ ...alertInfo, show: false }), 3000);
    }
  }
  return (
    <div style={pageStyle}>
      <div style={boxStyle}>
        {alertInfo.show && (
          <div className={`alert alert-${alertInfo.type}`} role="alert" style={{ width: "100%", textAlign: "center" }}>
            {alertInfo.message}
          </div>
        )}
        <h1>Login</h1>
        <form onSubmit={handlelogin} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
          <input
            type="text"
            placeholder="Username or email"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
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
          <button type="Submit" style={{ padding: "10px", fontSize: "16px", cursor: "pointer", backgroundColor: "#4CAF50", color: "white", border: "none" }}>Login</button>
          <p style={{ marginTop: "15px", fontSize: "14px" }}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "DodgerBlue", fontWeight: "bold" }}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
} export default Login;
