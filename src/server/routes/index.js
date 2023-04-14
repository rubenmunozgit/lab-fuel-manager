import express from 'express';
import { homeController, dashboardController } from '../controllers';
import homepageSession from '../middlewares/homepage-session';
import authSession from '../middlewares/auth-session';

const routes = express.Router();

routes.get('/', homepageSession, homeController);
routes.get('/dashboard', authSession, dashboardController);

export default routes;