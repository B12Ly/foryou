import React, { useEffect, useState } from "react";
import "./login.css";
import book from "../assets/book.png";
import Jigsaw from "./Jigsaw";
import cover from "../assets/cover.png"; 
import uncover from "../assets/uncover.png"; 

function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCovered, setIsCovered] = useState(true); 

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleCoverClick = () => {
    setIsCovered(false); 
  };

  return (
    <div className={`login ${isVisible ? "fade-in" : ""}`}>
      <div className="book-container">
        <img src={book} alt="centered" className="book" />
        
        {isCovered && (
          <div className="cover-container">
            <img src={cover} alt="cover" className="cover-image" />
            <img
              src={uncover}
              alt="uncover"
              className="uncover-button"
              onClick={handleCoverClick}
            />
          </div>
        )}

        <div className="jigsaw-wrapper">
          <Jigsaw />
        </div>
      </div>
      <h1>เข้าสู่ระบบ</h1>
    </div>
  );
}

export default Login;
