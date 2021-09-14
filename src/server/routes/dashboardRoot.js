import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../../universal/App';
import {initialState} from '../utils/initState';

const dashboardRoot = (req, res, next) => {
  console.log(req.user);
  const initState = {
    ...initialState,
    render: 'dashboard',
    isAuth: req.isAuth
  }
  console.log(initState)
  try{
    const html = ReactDOMServer.renderToString(<App initialState={initState}/>);
    res.render('react', {
      html,
      initialState: JSON.stringify(initState),
    });
  }
  catch (error) {
    console.log(error);
    next(error);
  }
}

export default dashboardRoot;