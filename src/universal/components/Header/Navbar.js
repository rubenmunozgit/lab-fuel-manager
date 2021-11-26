import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { Container, Navbar } from 'react-bootstrap';
import { useAuth } from '../../contexts/authContext';
import LoginModal from '../Modals/Login';
import SignupModal from '../Modals/Signup';

const NavBar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const showLogin = () => setShowLoginModal(true);
  const hideLogin = () => setShowLoginModal(false);
  const showSignup = () => setShowSignupModal(true);
  const hideSignup = () => setShowSignupModal(false);
  const { isAuth, logOut } = useAuth();

  const handleLogOut = () => {
    logOut();
    Cookies.remove('token');
    window.location.assign('/');
  };
  const handleDashB = () => {
    window.location.assign('/dashboard');
  };

  return (
    <>
      <Navbar bg='success' variant='dark' expand='sm'>
        <Container fluid>
          <Navbar.Brand href='/'>FuelManager</Navbar.Brand>
          <div className='col-md-3 text-end'>
            {!isAuth && (
              <>
                <button
                  type='button'
                  className='btn bg-white me-2'
                  onClick={showLogin}
                >
                  Log-In
                </button>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={showSignup}
                >
                  Sign-up
                </button>
              </>
            )}
            {isAuth && (
              <>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={handleDashB}
                >
                  Dashboard
                </button>
                <button
                  type='button'
                  className='btn bg-white me-2'
                  onClick={handleLogOut}
                >
                  Log-Out
                </button>
              </>
            )}
          </div>
        </Container>
      </Navbar>
      {!isAuth && <LoginModal show={showLoginModal} hide={hideLogin} />}
      {!isAuth && <SignupModal show={showSignupModal} hide={hideSignup} />}
    </>
  );
};

export default NavBar;
