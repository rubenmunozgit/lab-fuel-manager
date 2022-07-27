import express from 'express';
import homepageRoot from './homepageRoot';
import dashboardRoot from './dashboardRoot';
import homepageSession from '../middlewares/homepage-session';
import authSession from '../middlewares/auth-session';

const routes = express.Router();

routes.get('/', homepageSession, homepageRoot);
routes.get('/dashboard', authSession, dashboardRoot);

export default routes;