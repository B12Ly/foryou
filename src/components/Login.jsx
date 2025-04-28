import React, { useEffect, useState } from "react";
import "./login.css";
import book from "../assets/book2.png";
import Jigsaw from "./Jigsaw";
import cover from "../assets/cover.png";
import uncover from "../assets/uncover.png";

function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCovered, setIsCovered] = useState(true);
  const [isUncovering, setIsUncovering] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleCoverClick = () => {
    setIsUncovering(true);
    setTimeout(() => {
      setIsCovered(false);
    }, 1000);
  };

  return (
    <div className={`login ${isVisible ? "fade-in" : ""}`}>
      <div className="book-container">
        <img src={book} alt="centered" className="book" />

        {isCovered && (
          <div className="cover-container">
            <img
              src={cover}
              alt="cover"
              className={`cover-image ${isUncovering ? "fade-out" : ""}`} 
            />
            <img
              src={uncover}
              alt="uncover"
              className={`uncover-button ${isUncovering ? "fade-out" : ""}`}
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
