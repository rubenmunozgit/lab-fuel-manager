import {admin} from '../../firebase-server';

const authSession = async (req, res, next) => {
    const {token} = req.cookies;

    if (!token) {
        console.log('no cookie with token -> not allow');
        return res.redirect('/');
    }

    console.log('I have token');
    try {
        const decodeValue = await admin.auth().verifyIdToken(token);

        if (decodeValue) {
            // token valid -> can continue
            req.user = decodeValue;
            req.isAuth = true;
            return next();
        }
    } catch (err) {
        console.log(err);
        res.clearCookie('token');
        res.cookie('reAuth', true);
        return res.redirect('/');
    }
};

export default authSession;
