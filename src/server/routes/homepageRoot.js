import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../../universal/App';
import {initialState} from '../utils/initState';

const homepageRoot = (req, res, next) => {
  try{
    const html = ReactDOMServer.renderToString(<App initialState={initialState}/>);
    res.render('react', {
      html,
      initialState: JSON.stringify(initialState),
    });
  }
  catch (error) {
    console.log(error);
    next(error);
  }
}

export default homepageRoot;