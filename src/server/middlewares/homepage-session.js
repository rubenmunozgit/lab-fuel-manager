import {admin} from '../../firebase-server';

const homepageSession = async (req, res, next) => {
  const {token} = req.cookies;
  if(!token) {
    console.log('do not have token -> go homepage');
    return next();
  }

  console.log('I have a cookie -> check if valid');
  try {
    const decodeValue = await admin.auth().verifyIdToken(token);

    if (decodeValue) {
      return res.redirect('/dashboard'); // you are a valid user -> go to dashboard
    }
  } catch (err) {
    console.log(err);
    res.clearCookie('token');
		return res.redirect('/');
  }
}

export default homepageSession;