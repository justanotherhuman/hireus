import React from 'react';
import logo from './logo.svg';
import node from './logos/node.svg'
import graphQL from './logos/GraphQL.svg'
import Postgresql from './logos/Postgresql.svg'
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
        <img src={node} className="App-logo" alt="logo" />
        <img src={graphQL} className="App-logo" alt="logo" />
        <img src={Postgresql} className="App-logo" alt="logo" />
      <h1>Here are some links to resources that I use</h1>
      {links}
      </header>
    </div>
  );
}

export default App;
