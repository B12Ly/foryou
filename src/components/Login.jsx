import React, { useEffect, useState } from "react";
import "./login.css";
import book from "../assets/book.png"; 

function Login() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // หน่วงนิดนึงให้แน่ใจว่า transition ทำงาน
  }, []);

  return (
    <div className={`login ${isVisible ? "fade-in" : ""}`}>
      <img src={book} alt="centered" className="book" />
      <h1>เข้าสู่ระบบ</h1>
    </div>
  );
}

export default Login;
