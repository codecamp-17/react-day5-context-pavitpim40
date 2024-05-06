import { useState, useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
function App() {
  const { bg, bgButton, toggleDarkMode, isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`flex justify-center items-center h-screen ${bg}`}>
      <button className={`${bgButton} p-2 rounded-md`} onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default App;
