import React, { useState } from 'react';
import Pre from './components/pre.jsx';
import Login from './components/login.jsx';
import Jigsaw from './components/Jigsaw.jsx';
import Loading from './components/Load.jsx'; 

function App() {
  const [page, setPage] = useState("pre"); 
  const [fadeOut, setFadeOut] = useState(false); // สถานะ fade out

  const handleNext = () => {
    setFadeOut(true); // เริ่ม fade out
    setTimeout(() => {
      setPage("jigsaw");
    }, 1000); // เวลาที่ใช้ในการ fade out
  };

  return (
    <div className="app-wrapper">
      {page === "pre" && <Pre setPage={setPage} />}
      {page === "login" && (
        <Login setPage={setPage} fadeOut={fadeOut} />
      )}
      {page === "jigsaw" && (
        <Jigsaw setPage={setPage} handleNext={handleNext} fadeOut={fadeOut} />
      )}
      {page === "load" && <Loading setPage={setPage} />}
    </div>
  );
}

export default App;
