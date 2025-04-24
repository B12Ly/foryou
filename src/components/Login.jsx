import React, { useEffect, useState } from "react";
import "./login.css";
import book from "../assets/book.png";
import Jigsaw from "./Jigsaw";

function Login() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className={`login ${isVisible ? "fade-in" : ""}`}>
      <div className="book-container">
        <img src={book} alt="centered" className="book" />
        <div className="jigsaw-wrapper">
          <Jigsaw />
        </div>
      </div>
      <h1>เข้าสู่ระบบ</h1>
    </div>
  );
}

export default Login;
