import React, { useState } from 'react';
import Pre from './components/pre.jsx';
import Login from './components/Login';
import Load from './components/Load';
import Main from './components/Main'; 

function App() {
  const [currentPage, setCurrentPage] = useState('pre');

  return (
    <div className="app-container">
      {currentPage === 'pre' && <Pre setPage={setCurrentPage} />}
      {currentPage === 'login' && <Login setPage={setCurrentPage} />}
      {currentPage === 'load' && (
        <Load onLoadingComplete={() => setCurrentPage('main')} />
      )}
      {currentPage === 'main' && <Main />} 
    </div>
  );
}


export default App;