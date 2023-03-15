import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Homepage from '../../universal/Pages/Homepage';
import { initialState } from '../utils/initState';

const homepageRoot = (req, res, next) => {
    const initState = {
        ...initialState,
        ssrReAuth: req.reAuth || false,
    };

    try {
        const html = ReactDOMServer.renderToString(
            <Homepage initialState={initState} />
        );
        res.render('react', {
            html,
            initialState: JSON.stringify(initState),
            layout: 'homepage',
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export default homepageRoot;
