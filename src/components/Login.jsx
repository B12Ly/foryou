import React, { useState, useEffect } from "react";
import "./login.css";
import book from "../assets/book2.png";
import Jigsaw from "./Jigsaw";
import cover from "../assets/cover.png";
import uncover from "../assets/uncover.png";
import MessageLine from "./MessageLine.jsx"; 

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

        <div className="message-container">
          <MessageLine
            text=" "
            delay={0}
            tag="h1"
          />
          <MessageLine
            text="ว่าไงไอหมาอ้วน อยากจะไปหน้าถัดไปหรอ"
            delay={500}
            tag="h2"
            style={{
              color: "#555",
              fontSize: "20px",
              fontFamily: "'Inter', sans-serif",
            }}
          />
          <MessageLine
            text="(ขอให้โชคดีในการหาชิ้นส่วนจิ๊กซอว์!)"
            delay={1000}
            tag="h3"
            style={{
              color: "#0077cc",
              fontSize: "20px",
            }}
          />
        </div>

        <div className="jigsaw-wrapper">
          <Jigsaw />
        </div>
      </div>

      <h1>เข้าสู่ระบบ</h1>
    </div>
  );
}

export default Login;
