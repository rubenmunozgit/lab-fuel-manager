import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Pages/Homepage';
const initialState = window.__INITIAL_STATE__;

ReactDOM.hydrate(
  <Homepage initialState={initialState} />,
  document.getElementById('root')
);
