import React, { useState, useEffect } from "react";
import "./login.css";
import book from "../assets/book2.png";
import cover from "../assets/cover.png";
import uncover from "../assets/uncover.png";
import dance1 from "../assets/dance1.png";
import dance2 from "../assets/dance2.png";
import tell from "../assets/tell.png";
import bg from "../assets/bg.png";
import Jigsaw from "./Jigsaw";
import MessageLine from "./MessageLine";

function Login({ setPage }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isCovered, setIsCovered] = useState(true);
  const [isUncovering, setIsUncovering] = useState(false);
  const [animFrame, setAnimFrame] = useState(0);
  const [bgExpanded, setBgExpanded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    setTimeout(() => setBgExpanded(true), 500);
  }, []);

  const handleCoverClick = () => {
    setIsCovered(false);
    setIsUncovering(true);
  };

  useEffect(() => {
    let interval;
    if (isUncovering && !isCovered) {
      interval = setInterval(() => {
        setAnimFrame((prev) => (prev === 0 ? 1 : 0));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isUncovering, isCovered]);

  return (
    <div className={`login ${isVisible ? "fade-in" : ""}`}>
      <img
        src={bg}
        alt="background"
        className={`background-image ${bgExpanded ? "expand" : ""}`}
      />

      <div className="book-container">
        <img src={book} alt="book" className="book" />

        {!isUncovering && isCovered && (
          <img src={tell} alt="page" className="book-page" />
        )}

        {isUncovering && !isCovered && (
          <img
            src={animFrame === 0 ? dance1 : dance2}
            alt="anim-page"
            className="book-page"
          />
        )}

        {/* ปกหนังสือและปุ่ม */}
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

        {/* ข้อความ */}
        <div
          className={`message-container ${
            isUncovering ? "fade-out-message" : ""
          }`}
        >
          <MessageLine text=" " delay={0} tag="h1" />
          <MessageLine
            text="ถ้าอ้วนอ้วนอยากจะไปหน้าถัดไปหนะ"
            delay={500}
            tag="h2"
            style={{
              color: "#555",
              fontSize: "20px",
              fontFamily: "'Inter', sans-serif",
              position: "absolute",
              top: "-14px",
            }}
          />
          <MessageLine
            text="อ้วนต้องเล่นเกมให้ผ่านก่อน"
            delay={2200}
            tag="h3"
            style={{
              color: "#555",
              fontSize: "20px",
              position: "absolute",
              top: "19px",
            }}
          />
          <MessageLine
            text="กดตรงที่หัวใจสิหมาอ้วน"
            delay={3800}
            tag="h4"
            style={{
              color: "#555",
              fontSize: "20px",
              position: "absolute",
              top: "26px",
            }}
          />
        </div>

        {/* เกมจิ๊กซอว์ */}
        <div className="jigsaw-wrapper">
          <Jigsaw setPage={setPage} />
        </div>
      </div>
    </div>
  );
}

export default Login;
