import logo from './Resources/ProfessionalHeadShot.jfif';
import './App.css';
import './style.css';
import { useEffect, useState } from "react";

function App() {

  return (
    <div className="App">
      <title>EvanPatrick.site</title>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Evan Patrick | Software Engineer
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
