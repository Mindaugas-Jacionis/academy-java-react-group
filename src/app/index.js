import React from 'react';
import Logo from './components/Logo';
import Link from './components/Link';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link href="https://google.com">Linko Textas</Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World
        </a>
      </header>
    </div>
  );
}

export default App;
