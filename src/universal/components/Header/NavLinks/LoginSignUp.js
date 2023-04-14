import React, { useState } from 'react';
import SignUp from '../Links/SignUp';
import LogIn from '../Links/LogIn';

const LoginSignUp = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);

    const showLogin = () => setShowLoginModal(true);
    const hideLogin = () => setShowLoginModal(false);

    return (
        <>
            <LogIn />
            <SignUp />
        </>
    );
};

export default LoginSignUp;
