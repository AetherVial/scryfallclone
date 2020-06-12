import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import catto from './frostcatto1.png';
import './App.css';

function App() {
  let [searchTerm, setSearchTerm] = useState('');


  function onFormSubmit(e) {
    e.preventDefault();
    alert(searchTerm);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={catto} className="App-logo" alt="logo" />

        <form onSubmit={e => onFormSubmit(e)}>
          <input type="text" placeholder="Start Searching Here!" onChange={e => setSearchTerm(e.target.value.toLowerCase())}></input>
        </form>
        <p>
          <code>Welcome to ScraureusFetch, where Aureus fetches cardboard rectangles.</code>
        </p>
      </header>
    </div>
  );
}

export default App;
