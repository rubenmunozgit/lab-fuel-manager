import React, { useState } from 'react';
import Cookies from 'js-cookie';
import {
  Container,
  Navbar,
  Modal,
  Button,
  Form,
  Alert,
  Spinner,
} from 'react-bootstrap';
import { useAuth } from '../../contexts/authContext';

const LoginModal = ({ show, hide }) => {
  const [input, setInput] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { emailPassSignIn } = useAuth();

  const GooglSign = () => { };
  const handleEmailPassSignIn = async () => {
    const { email, password } = input;
    setError('');
    setLoading(true);
    try {
      await emailPassSignIn(email, password);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.currentTarget;
    setInput((input) => ({
      ...input,
      [name]: value,
    }));
  };

  return (
    <Modal show={show} onHide={hide}>
      <Modal.Header>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              name='email'
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              name='password'
              onChange={handleInputChange}
            />
          </Form.Group>
          {loading && (
            <div className='d-flex justify-content-center'>
              <Spinner className='mb-3' animation='grow' variant='success' />
            </div>
          )}
          {error && <Alert variant='warning'>{error}</Alert>}
        </Form>
        <Button
          variant='primary'
          className='w-100'
          onClick={handleEmailPassSignIn}
        >
          Login
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={GooglSign}>
          Google
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const SignupModal = ({ show, hide }) => {
  const [input, setInput] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { emailPassSignUp } = useAuth();

  const handleInputChange = (evt) => {
    const { name, value } = evt.currentTarget;
    setInput((input) => ({
      ...input,
      [name]: value,
    }));
  };

  const handleEmailPassSignUp = async () => {
    const { email, password, confPassword } = input;
    setError('');
    if (password !== confPassword) {
      setError('Password must match');
      return;
    }
    setLoading(true);
    try {
      await emailPassSignUp(email, password);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <Modal show={show} onHide={hide}>
      <Modal.Header>
        <Modal.Title>Sign Up to Fuel Manager</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='formEmailSignUp'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              name='email'
              onChange={handleInputChange}
            />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formPasswordSignUp'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              name='password'
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formConfirmPasswordSignUp'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Repeat Password'
              name='confPassword'
              onChange={handleInputChange}
            />
          </Form.Group>

          {loading && (
            <div className='d-flex justify-content-center'>
              <Spinner className='mb-3' animation='grow' variant='success' />
            </div>
          )}
          {error && <Alert variant='warning'>{error}</Alert>}
        </Form>
        <Button
          variant='primary'
          className='w-100'
          onClick={handleEmailPassSignUp}
        >
          Sign Up
        </Button>
      </Modal.Body>
    </Modal>
  );


};

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
      <LoginModal show={showLoginModal} hide={hideLogin} />
      <SignupModal show={showSignupModal} hide={hideSignup} />
    </>
  );
};

export default NavBar;
