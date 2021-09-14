import React  from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const initialState = window.__INITIAL_STATE__;

ReactDOM.hydrate(
  <App initialState={initialState}/>, 
  document.getElementById('root')
);