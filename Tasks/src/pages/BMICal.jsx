import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import bgImage from '../assets/bg.jpg';
import obesityImg from '../assets/obesity.png';
import underweight1 from '../assets/underweight1.png';
import underweight2 from '../assets/underweight2.png';
import normalImg from '../assets/normal.png';



const pageStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  fontFamily: "Arial",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  position: "relative"
};

const boxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(5px)",
  padding: "40px",
  borderRadius: "10px",
  width: "350px"
};

const logoutButtonStyle = {
  position: "absolute",
  top: "20px",
  right: "20px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#f44336",
  color: "white",
  border: "none",
  borderRadius: "5px"
};

function BMICal() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) setStatus("Underweight");
      else if (bmiValue < 24.9) setStatus("Normal weight");
      else if (bmiValue < 29.9) setStatus("Overweight");
      else setStatus("Obesity");
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div style={pageStyle}>
      <button style={logoutButtonStyle} onClick={handleLogout}>
        Logout
      </button>

      <div style={boxStyle}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>BMI Calculator</h1>
        <form onSubmit={calculateBMI} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            style={{ padding: "10px", fontSize: "16px" }}
          />
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
            style={{ padding: "10px", fontSize: "16px" }}
          />
          <button type="submit" style={{ padding: "10px", fontSize: "16px", cursor: "pointer", backgroundColor: "#4CAF50", color: "white", border: "none" }}>
            Calculate BMI
          </button>
        </form>
        {bmi && (
          <div style={{ marginTop: "20px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h3>Your BMI: {bmi}</h3>
            <p>Status: <strong>{status}</strong></p>

            {status === "Obesity" && (
              <div style={{ marginTop: "10px" }}>
                <img src={obesityImg} alt="Obesity" style={{ maxWidth: "150px", borderRadius: "10px" }} />
              </div>
            )}
            {status === "Underweight" && (
              <div style={{ marginTop: "10px", display: "flex", gap: "10px", justifyContent: "center" }}>
                <img src={underweight1} alt="Underweight 1" style={{ maxWidth: "100px", borderRadius: "10px" }} />
                <img src={underweight2} alt="Underweight 2" style={{ maxWidth: "100px", borderRadius: "10px" }} />
              </div>
            )}
            {status === "Normal weight" && (
              <div style={{ marginTop: "10px" }}>
                <img src={normalImg} alt="Normal Weight" style={{ maxWidth: "150px", borderRadius: "10px" }} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default BMICal;
