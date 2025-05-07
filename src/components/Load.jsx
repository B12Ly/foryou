import React, { useState, useEffect } from "react";
import "./Load.css";
import background from "../assets/bg.png";
import decor1 from "../assets/m1.png";
import decor2 from "../assets/m2.png";

function Load({ onLoadingComplete }) {
  const [dots, setDots] = useState(".");
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "." : prev + ".");
    }, 500);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.floor(Math.random() * 10) + 1;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
          return 100;
        }
        return newProgress;
      });
    }, 300);

    return () => {
      clearInterval(dotInterval);
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        onLoadingComplete();
      }, 1000); 
      return () => clearTimeout(timer);
    }
  }, [isComplete, onLoadingComplete]);

  return (
    <div className={`load-container ${isComplete ? "fade-out" : ""}`}>
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