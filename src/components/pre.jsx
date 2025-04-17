import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./pre.css";
import Cat from "../assets/cat.png";
import flw1 from "../assets/flower1.png";
import flw2 from "../assets/flower2.png";
import Reye from "../assets/Reye.png";
import Leye from "../assets/Leye.png";

function Pre() {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const leftEye = leftEyeRef.current;
      const rightEye = rightEyeRef.current;

      if (leftEye && rightEye) {
        const leftPupil = leftEye.querySelector(".pupil");
        const rightPupil = rightEye.querySelector(".pupil");

        movePupil(leftEye, leftPupil, e.clientX, e.clientY);
        movePupil(rightEye, rightPupil, e.clientX, e.clientY);
      }
    };

    const movePupil = (eye, pupil, mouseX, mouseY) => {
      const rect = eye.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const dx = mouseX - eyeCenterX;
      const dy = mouseY - eyeCenterY;
      const angle = Math.atan2(dy, dx);

      // ปรับระยะการเคลื่อนไหวให้สมจริง
      const maxDistance = 15;
      const distance = Math.min(maxDistance, Math.hypot(dx, dy) * 0.2);

      pupil.style.transform = `translate(${Math.cos(angle) * distance}px, ${
        Math.sin(angle) * distance
      }px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
      <div className="top-box">
        <div className="message message-1">พร้อมไหมม</div>
        <div className="message message-2">ไอหมาอ้วนน อ้วนตุ้บบบบ</div>

        {/* รูปแมว */}
        <img src={Cat} className="Cat" />

        {/* ตาซ้าย */}
        <div className="eye left-eye" ref={leftEyeRef}>
          <img src={Leye} className="pupil" />
        </div>

        {/* ตาขวา */}
        <div className="eye right-eye" ref={rightEyeRef}>
        <img src={Reye} className="pupil" />
        </div>
      </div>
      <div className="bottom-box">
        <img src={flw1} className="flw1" />
        <img src={flw2} className="flw2" />
        <button className="custom-button">เริ่มกันเลยย เย้ เย้!</button>
      </div>
    </div>
  );
}

export default Pre;
