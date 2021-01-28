import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <nav className="navbar-container">
        <img src="" alt="logo" />
          <ul className="navbar_list">
            <li className="navbar-item"><a href="/">Home</a></li>
            <li className="navbar-item"><a href="/">Usługi</a></li>
            <li className="navbar-item"><a href="/">Realizacje</a></li>
            <li className="navbar-item"><a href="/">Dofinansowanie</a></li>
            <li className="navbar-item"><a href="/">O nas</a></li>
          </ul>
          <p className="button-hollow"><a href="/">kontakt</a></p>
      </nav>
    </div>
  );
}

export default App;
