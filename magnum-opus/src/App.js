import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let linksNames = [
    {name: "glassdoor", url: "https://www.glassdoor.com"}, 
    {name: "linkedIn", url: "https://www.linkedin.com"},
    {name: "dice", url: "https://www.dice.com"},                
    {name: "zipRecruiter", url: "https://www.ziprecruiter.com"},                  
    {name: "builtin Austin", url: "https://www.builtinaustin.com"}, 
    {name: "neuvoo", url: "https://www.neuvoo.com"},
    {name: "weworkremotely", url: "https://www.weworkremotely.com"},            
    {name: "angel list", url: "https://www.angel.co"}
  ]

  let links = linksNames.map(name => 
    <a
    className="App-link"
    href={name.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {name.name}
  </a>
    )
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h1>Here are some links to resources that I use</h1>
        {/* <a
          className="App-link"
          href="https://www.glassdoor.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          glassdoor
        </a>

        <a
          className="App-link"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedIn
        </a>

        <a
          className="App-link"
          href="https://www.builtinaustin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          builtin ATX
        </a> */}
      {links}
      </header>
    </div>
  );
}

export default App;
