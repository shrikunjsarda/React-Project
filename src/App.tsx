import React from 'react';
import Login from './LoginPage/Login';
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter as Router, useHistory} from 'react-router-dom';
import Register from './RegistrationPage/Registration';
import Profile from './UserProfile/Profile';
import ChangePassword from './UserProfile/ChangePassword';
import EditProfile from './UserProfile/EditProfile';
import Dashboard from './Dashboard/Dashboard';
import RegisterButtonStyle from './Components/ButtonRegister/RegisterButtonStyle';
import GlobalStyle from './Components/GlobalStyle/GlobalStyle';



function App() {
  return (
    <> 

      <Router>
        {/* /<Profile /> */}
        {/* <Register /> */}
    
        <Dashboard/>
      </Router>

    </>
  );
}

export default App;
