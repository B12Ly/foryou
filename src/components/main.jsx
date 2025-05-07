import React, { useState, useEffect } from "react";
import "./Main.css";
import cakeImage from "../assets/cake.png";

function Main() {
  const [lightIntensity, setLightIntensity] = useState(0);
  const [showCake, setShowCake] = useState(false);

  useEffect(() => {
    // เริ่มด้วยหน้าจอมืดสนิท
    setLightIntensity(0);

    // แสงเทียนค่อยๆ สว่างขึ้น (3 วินาที)
    const lightInterval = setInterval(() => {
      setLightIntensity((prev) => {
        if (prev >= 100) {
          clearInterval(lightInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    // แสดงเค้กหลังจากแสงสว่างพอสมควร
    setTimeout(() => {
      setShowCake(true);
    }, 1500);

    return () => clearInterval(lightInterval);
  }, []);

  return (
    <div className="main-container">
      {/* พื้นหลังสีดำ fade-in */}
      <div
        className="black-fade"
        style={{ opacity: 1 - lightIntensity / 100 }}
      ></div>

      {/* Layer แสงเทียน */}
      <div
        className="candle-light"
        style={{ opacity: lightIntensity / 100 }}
      ></div>

      {/* เค้ก */}
      {showCake && (
        <img
          src={cakeImage}
          alt="Birthday Cake"
          className="cake-image"
          style={{ opacity: (lightIntensity - 30) / 70 }}
        />
      )}
    </div>
  );
}

export default Main;
