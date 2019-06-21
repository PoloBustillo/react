import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
          <a href="#" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>
        </header>
      </div>
    );
  }
}

export default App;
