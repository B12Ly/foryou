import React, { useState } from 'react';
import './main.css';
import Load from './Load';


export default function Main() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="main-ui">
      <Load /> {/* แสดงเฉพาะหน้า Loading ตลอดเวลา */}
    </div>
  );
}