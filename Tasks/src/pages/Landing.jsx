import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/bg.jpg';

const pageStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const buttonStyle = {
    padding: "15px 30px",
    fontSize: "20px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
};

function Landing() {
    const navigate = useNavigate();

    return (
        <div style={pageStyle}>
            <button style={buttonStyle} onClick={() => navigate('/login')}>
                Login
            </button>
        </div>
    );
}

export default Landing;
