import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Homepage from '../../universal/Pages/Homepage';
import { initialState } from '../utils/initState';
import logger from '../utils/logger';

const homeController = (req, res, next) => {
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
        logger.error(error);
        next(error);
    }
};

export default homeController;
