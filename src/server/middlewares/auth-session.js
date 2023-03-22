import { auth } from '../../firebase-server';
import logger from '../utils/logger';

const authSession = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        logger.info('authSession - request has no cookie with token -> not allow: go homepage');
        return res.redirect('/');
    }

    logger.info('authSession - There is a token, verify...');
    try {
        const decodeValue = await auth().verifyIdToken(token);

        if (decodeValue) {
            // token valid -> can continue
            logger.info('authSession - token valid -> go dashboard');
            req.user = decodeValue;
            req.isAuth = true;
            return next();
        }
    } catch (err) {
        logger.error(err);
        res.clearCookie('token');
        res.cookie('reAuth', true);
        return res.redirect('/');
    }
};

export default authSession;
