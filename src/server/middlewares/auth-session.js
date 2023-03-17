import { auth } from '../../firebase-server';
import logger from '../utils/logger';

const authSession = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        logger.info('no cookie with token -> not allow');
        return res.redirect('/');
    }

    logger.info('I have token');
    try {
        const decodeValue = await auth().verifyIdToken(token);

        if (decodeValue) {
            // token valid -> can continue
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
