import { createContext, useState } from 'react';

export const ThemeContext = createContext();
// export {ThemeContext}

export default function Provider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  let bg = isDarkMode ? 'bg-black' : 'bg-white';
  let bgButton = isDarkMode ? 'bg-white text-black' : 'bg-black text-white';

  return (
    <ThemeContext.Provider value={{ bg, bgButton, toggleDarkMode, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
