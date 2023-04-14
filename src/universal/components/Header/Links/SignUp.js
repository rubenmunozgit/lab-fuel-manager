import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import SignupModal from '../../Modals/Signup';

const SignUp = () => {
    const [showSignupModal, setShowSignupModal] = useState(false);
    const showSignup = () => setShowSignupModal(true);
    const hideSignup = () => setShowSignupModal(false);

    return (
        <>
            <Button variant='primary' onClick={showSignup}>
                Sign-up
            </Button>

            <SignupModal show={showSignupModal} hide={hideSignup} />
        </>
    );

};

export default SignUp;