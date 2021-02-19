import React from 'react';
import Login from './LoginPage/Login';
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter as Router, useHistory} from 'react-router-dom';
import Register from './RegistrationPage/Registration';
function App() {
  return (
    <> 
      <Router>
        <Register />
      </Router>
      
    </>
  );
}

export default App;
