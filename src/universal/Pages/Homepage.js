import  React, {useState}  from 'react';
import Cookies from 'js-cookie';
import {useAuth} from '../contexts/authContext'
import NavBar from '../components/Header/Navbar'
import fuelImage  from '../../../assets/fuel-mgm-ilus.svg';

const Content = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={fuelImage}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">
            Responsive left-aligned hero with image
            </h1>
          <p className="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source
            toolkit, featuring Sass variables and mixins, responsive grid
            system, extensive prebuilt components, and powerful JavaScript
            plugins.
            </p>
        </div>
      </div>
    </div>
  );
}

const Homepage = () => {
  const {isAuth, token} = useAuth();

  if(isAuth && token){
    Cookies.set('token', token);
    window.location.assign('/dashboard');
  }
  
  return (
    <>
      <NavBar />
      <Content />
    </>
  );
}

export default Homepage