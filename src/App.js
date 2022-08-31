import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor="#042743";
    } else {
      setMode('light')
      document.body.style.backgroundColor="white";
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <TextForm mode={mode}/>
    </>
  );
}

export default App;
