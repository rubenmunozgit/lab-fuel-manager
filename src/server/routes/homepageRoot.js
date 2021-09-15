import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Homepage from '../../universal/Pages/Homepage';
import { initialState } from '../utils/initState';

const homepageRoot = (req, res, next) => {
  try {
    const html = ReactDOMServer.renderToString(
      <Homepage initialState={initialState} />
    );
    res.render(
      'react',
      {
        html,
        initialState: JSON.stringify(initialState),
        layout: 'homepage'
      }
    );
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default homepageRoot;
