import React from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';

const initialMovies = {
  listName: 'favorite movies',
  movies: [
    'Harry Potter',
    'Władca pierścieni',
    'A więc wojna',
    'Poznaj moich Spartan'
  ]
}

function movies(state = initialMovies, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state, movies: [...state.movies, action.movie]
      }
    case 'RESET':
    return {
      ...state, movies: []
    }
    default:
      return state
  }
}

const store = createStore(movies)
window.store = store;

function App() {
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
        </header>
      </div>
    );
}
  

export default App;
