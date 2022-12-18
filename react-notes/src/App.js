import logo from './logo.svg';
import './App.css';
import { NotFoundError } from 'rxjs';
import { ReactDOM } from 'react';
import React from 'react';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes</h1>
        <Form/>
      </header>
    </div>
  );
  }

export default App;

