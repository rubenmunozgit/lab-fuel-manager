import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import LoginModal from '../../Modals/Login';
import SignupModal from '../../Modals/Signup';

const LoginSignUp = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const showLogin = () => setShowLoginModal(true);
    const hideLogin = () => setShowLoginModal(false);
    const showSignup = () => setShowSignupModal(true);
    const hideSignup = () => setShowSignupModal(false);

    return (
        <>
            <Button className='me-2' variant='light' onClick={showLogin}>
                Log-In
            </Button>
            <Button variant='primary' onClick={showSignup}>
                Sign-up
            </Button>

            <LoginModal show={showLoginModal} hide={hideLogin} />
            <SignupModal show={showSignupModal} hide={hideSignup} />
        </>
    );
};

export default LoginSignUp;
