import logger from '../utils/logger';

const homepageSession = async (req, res, next) => {
    const { token, reAuth } = req.cookies;

    if (!token || reAuth) {
        logger.info('homepageSession - request has no cookie with token or reAuth is true -> redirecting to homepage');
        if (reAuth) {
            logger.info('homepageSession - reAuth = true -> clearing reAuth cookie and setting req.reAuth to true');
            res.clearCookie('reAuth');
            req.reAuth = true;
        }
        return next();
    }

    logger.info('homepageSession - There is a token, redirecting to dashboard...');
    return res.redirect('/dashboard');
};

export default homepageSession;
