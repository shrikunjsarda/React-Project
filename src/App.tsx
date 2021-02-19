import React from 'react';
import Login from './LoginPage/Login';
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter as Router, useHistory} from 'react-router-dom';
import Register from './RegistrationPage/Registration';
import Profile from './UserProfile/Profile';
function App() {
  return (
    <> 

      <Router>
        {/* /<Profile /> */}
        {/* <Register /> */}
        <Login/>
      </Router>

    </>
  );
}

export default App;
