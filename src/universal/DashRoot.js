import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Pages/Dashboard';
const initialState = window.__INITIAL_STATE__;

ReactDOM.hydrate(
    <Dashboard initialState={initialState} />,
  document.getElementById('root')
);
