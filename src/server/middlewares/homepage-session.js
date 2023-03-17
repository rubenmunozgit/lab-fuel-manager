import { auth } from '../../firebase-server';
import logger from '../utils/logger';

const homepageSession = async (req, res, next) => {
    const { token, reAuth } = req.cookies;

    if (!token || reAuth) {
        logger.info('do not have token -> go homepage');
        if (reAuth) {
            res.clearCookie('reAuth');
            req.reAuth = true;
        }
        return next();
    }

    logger.info('I have a cookie -> check if valid');
    try {
        const decodeValue = await auth().verifyIdToken(token);

        if (decodeValue) {
            return res.redirect('/dashboard'); // you are a valid user -> go to dashboard
        }
    } catch (err) {
        logger.error(err);
        res.clearCookie('token');
        return res.redirect('/');
    }
};

export default homepageSession;
