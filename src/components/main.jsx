import React, { useEffect, useState } from "react";
import "./Main.css";
import image1 from "../assets/polariod.png"; // เปลี่ยนเป็นชื่อภาพจริง
import image2 from "../assets/wish2.png";

function Main() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowFirst(true);
    }, 500); // เริ่มภาพแรกหลังจาก 0.5 วิ

    const timer2 = setTimeout(() => {
      setShowSecond(true);
    }, 3000); // เริ่มภาพสองหลังจาก 2 วิ

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="main-container">
      <img
        src={image1}
        alt="Image 1"
        className={`fade-image image1 ${showFirst ? "visible" : ""}`}
      />
      <img
        src={image2}
        alt="Image 2"
        className={`fade-image image2 ${showSecond ? "visible" : ""}`}
      />
    </div>
  );
}

export default Main;
