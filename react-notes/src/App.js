import logo from './logo.svg';
import './App.css';
import { NotFoundError } from 'rxjs';
import { ReactDOM } from 'react';
import React from 'react';
import Notes from './Notes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes</h1>
        <Notes/>
      </header>
    </div>
  );
  }

export default App;

