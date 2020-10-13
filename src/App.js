import React from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore, combineReducers, bindActionCreators } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const initialMovies = {
  listName: 'favorite movies',
  list: [
    'Harry Potter',
    'Władca pierścieni',
    'A więc wojna',
    'Poznaj moich Spartan'
  ]
}

const initialActors = {
  listName: 'best actors',
  list: [
    'Leonardo DiCaprio',
    'Tom Hardy',
    'Reese Witherspoon',
    'Angelina Jolie',
    'Orlando Bloom'
  ]
}

function movies(state = initialMovies, action) {
  switch (action.type) {
    case 'ADD_MOVIES':
      return {
        ...state, list: [...state.list, action.item]
      }
    case 'RESET_MOVIES':
    return {
      ...state, list: []
    }
    default:
      return state
  }
}

function actors(state = initialActors, action) {
  switch (action.type) {
    case 'ADD_ACTORS':
      return {
        ...state, list: [...state.list, action.item]
      }
    case 'RESET_ACTORS':
    return {
      ...state, list: []
    }
    default:
      return state
  }
}

const allReducers = combineReducers({movies, actors})

const store = createStore(allReducers, composeWithDevTools())
window.store = store;

const addActor = item => ({type: 'ADD_ACTOR', item})
const resetActors = () => ({type: 'RESET_ACTORS'})
store.dispatch(addActor('Cezary Pazura'));

const actorsAction = bindActionCreators({add: addActor, resetActors}, store.dispatch)
actorsAction.add('Brad Pitt')

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
