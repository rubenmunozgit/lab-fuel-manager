import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Dashboard from '../../universal/Pages/Dashboard';
import { initialState } from '../utils/initState';

const dashboardRoot = (req, res, next) => {
  const initState = {
    ...initialState,
    isSSRAuth: req.isAuth,
  };

  try {
    const html = ReactDOMServer.renderToString(
      <Dashboard initialState={initState} />
    );
    res.render('react', {
      html,
      initialState: JSON.stringify(initState),
      layout: 'dashboard',
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default dashboardRoot;
