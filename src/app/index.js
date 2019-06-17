import React from 'react';
import Logo from './components/Logo';
import Link from './components/Link';
import Button from './components/Button';
import './App.css';

function message() {
  alert('Message');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link href="https://google.com">Linko Textas</Link>
        <Button secondary onClick={message}>
          Mygtukas
        </Button>
      </header>
    </div>
  );
}

export default App;
