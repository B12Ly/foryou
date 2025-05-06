import React, { useRef, useState, useEffect } from 'react';
import './Pre.css';
import Cat from '../assets/cat.png';
import flw1 from '../assets/flower1.png';
import flw2 from '../assets/flower2.png';
import Reye from '../assets/Reye.png';
import Leye from '../assets/Leye.png';

function Pre({ setPage }) {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const leftEye = leftEyeRef.current;
      const rightEye = rightEyeRef.current;

      if (leftEye && rightEye) {
        const leftPupil = leftEye.querySelector('.pupil');
        const rightPupil = rightEye.querySelector('.pupil');

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

      const maxDistance = 15;
      const distance = Math.min(maxDistance, Math.hypot(dx, dy) * 0.2);

      pupil.style.transform = `translate(${Math.cos(angle) * distance}px, ${
        Math.sin(angle) * distance
      }px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        setPage('login');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [fadeOut, setPage]);

  return (
    <div className={`pre-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="top-box">
        <div className="message message-1">พร้อมไหมม</div>
        <div className="message message-2">ไอหมาอ้วนน อ้วนตุ้บบบบ</div>

        <img src={Cat} className="Cat" alt="cat" />

        <div className="eye left-eye" ref={leftEyeRef}>
          <img src={Leye} className="pupil" alt="left eye" />
        </div>

        <div className="eye right-eye" ref={rightEyeRef}>
          <img src={Reye} className="pupil" alt="right eye" />
        </div>
      </div>

      <div className="bottom-box">
        <img src={flw1} className="flw1" alt="flower 1" />
        <img src={flw2} className="flw2" alt="flower 2" />
        <button className="custom-button" onClick={() => setFadeOut(true)}>
          เริ่มกันเลยย เย้ เย้!
        </button>
      </div>
    </div>
  );
}

export default Pre;