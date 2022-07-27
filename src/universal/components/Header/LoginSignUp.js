import React, {useState} from 'react';
import LoginModal from '../Modals/Login';
import SignupModal from '../Modals/Signup';

const LoginSignUp = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const showLogin = () => setShowLoginModal(true);
    const hideLogin = () => setShowLoginModal(false);
    const showSignup = () => setShowSignupModal(true);
    const hideSignup = () => setShowSignupModal(false);

    return (
        <>
            <button type='button' className='btn bg-white me-2' onClick={showLogin}>
                Log-In
            </button>
            <button type='button' className='btn btn-primary' onClick={showSignup}>
                Sign-up
            </button>
            <LoginModal show={showLoginModal} hide={hideLogin}/>
            <SignupModal show={showSignupModal} hide={hideSignup}/>
        </>
    );
};

export default LoginSignUp;
