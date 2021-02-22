import React from 'react';
import Login from './LoginPage/Login';
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter as Router, useHistory} from 'react-router-dom';
import Register from './RegistrationPage/Registration';
import Profile from './UserProfile/Profile';
import ChangePassword from './UserProfile/ChangePassword';
import EditProfile from './UserProfile/EditProfile';



function App() {
  return (
    <> 
      {/* <Login/> */}
      <Switch>
        {/* /<Profile /> */}
        {/* <Register /> */}
        
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/edit_profile/" component={EditProfile} />
        <Route path="/password_change/" component={ChangePassword} />
        {/* <Login/> */}
        {/* <ChangePassword/> */}
      </Switch>

    </>
  );
}

export default App;
