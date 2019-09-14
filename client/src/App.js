import React from 'react';
import './App.scss';
import MainContent from './components/MainContent';
import { useDarkMode } from './hooks/useDarkeMode';
const App = () => {
  const [darkMode, setDarkMode, toggleMode] = useDarkMode(false);

  return (
    <div>
      <MainContent toggleMode={toggleMode} darkMode={darkMode} />
    </div>
  )
}


export default App;
