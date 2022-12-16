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

/* 
<h1> Notes APP</h1>
  <hr>
  <h4>Add a note below</h4>
  <select name="colours" id="colour">
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="red">Red</option>
      <option value="yellow">Yellow</option>
  </select>
  
  
  <textarea id="text-note"></textarea>
  <button onclick="createNote()">Add note</button>
  <br>
  <br>
  <script src="script-notes.js"></script> */