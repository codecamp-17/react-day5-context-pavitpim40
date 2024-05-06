import { useState } from 'react';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  let bg = isDarkMode ? 'bg-black' : 'bg-white';
  let bgButton = isDarkMode ? 'bg-white text-black' : 'bg-black text-white';

  return (
    <div className={`flex justify-center items-center h-screen ${bg}`}>
      <button className={`${bgButton} p-2 rounded-md`} onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default App;
