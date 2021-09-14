import React from 'react';
import Homepage  from './Pages/Homepage';
import Dashboard  from './Pages/Dashboard';
import {AuthProvider} from './contexts/authContext';

const isHomepage = render => render === 'homepage';

const App = ({initialState}) => {

  const {render, isAuth} = initialState;
  return (
    <AuthProvider isSSRAuth={isAuth}>
      {isHomepage(render) ? <Homepage /> : <Dashboard />}
    </AuthProvider>
    )
};

export default App;