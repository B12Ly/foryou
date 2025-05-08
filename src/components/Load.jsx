import React, { useState, useEffect } from "react";
import "./Load.css";
import background from "../assets/bg.png";
import decor1 from "../assets/m1.png";
import decor2 from "../assets/m2.png";

const MAX_PROGRESS = 100;
const DARKEN_SPEED = 2;
const DARKEN_INTERVAL = 30;
const LOADING_INTERVAL = 100;
const DOT_INTERVAL = 500;
const DARK_DELAY = 3000;

function Load({ onLoadingComplete }) {
  const [dots, setDots] = useState(".");
  const [progress, setProgress] = useState(0);
  const [darken, setDarken] = useState(0);
  const [isFullyDark, setIsFullyDark] = useState(false);

  // จุดไข่ปลา
  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? "." : prev + "."));
    }, DOT_INTERVAL);

    return () => clearInterval(dotInterval);
  }, []);

  // แถบโหลด
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.floor(Math.random() * 10) + 1;
        const newProgress = prev + increment;
        if (newProgress >= MAX_PROGRESS) {
          clearInterval(progressInterval);
          return MAX_PROGRESS;
        }
        return newProgress;
      });
    }, LOADING_INTERVAL);

    return () => clearInterval(progressInterval);
  }, []);

  // เริ่มมืดหลังโหลดเสร็จ
  useEffect(() => {
    if (progress >= MAX_PROGRESS) {
      const darkenInterval = setInterval(() => {
        setDarken(prev => {
          const next = prev + DARKEN_SPEED;
          if (next >= 100) {
            clearInterval(darkenInterval);
            setIsFullyDark(true);
            return 100;
          }
          return next;
        });
      }, DARKEN_INTERVAL);

      return () => clearInterval(darkenInterval);
    }
  }, [progress]);

  // ไปหน้าใหม่หลังมืดสนิท
  useEffect(() => {
    if (isFullyDark) {
      const timer = setTimeout(() => {
        onLoadingComplete();
      }, DARK_DELAY);

      return () => clearTimeout(timer);
    }
  }, [isFullyDark, onLoadingComplete]);

  return (
    <div className="load-container">
      {/* ความมืดแบบมี transition */}
      <div 
        className="darken-overlay" 
        style={{ opacity: darken / 100 }}
      ></div>

      <img src={background} alt="background" className="load-bg" />

      <div className="load-content">
        <img src={decor1} alt="decoration 1" className="decor decor1" />
        <img src={decor2} alt="decoration 2" className="decor decor2" />

        <div className="loading-text">
          Loading{dots}
        </div>

        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Load;
