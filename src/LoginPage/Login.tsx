import { render } from '@testing-library/react';
import React, {useEffect, useState} from 'react';
import GlobalStyle from '../Components/GlobalStyle/GlobalStyle';
import FormStyle from '../Components/Form/FormStyle';
import FormWrapperStyle from '../Components/FormWrapper/FormWrapperStyle';
import HeadingStyle from '../Components/Heading/HeadingStyle';
import Heading from '../Components/Heading/heading_Components';
import InputArea from '../Components/InputArea/InputArea';
import RegisterButtonStyle from '../Components/ButtonRegister/RegisterButtonStyle';
import NewUserRegistration from '../Components/RegistrationLink/NewUserRegistration';
import ErrorStyle from '../Components/ErrorStyle/ErrorStyle';
import {users} from '../db.json';
import Profile from '../UserProfile/Profile';
import {BrowserRouter} from 'react-router-dom';
import {useHistory} from 'react-router';

const initialState = {
    email: "",
    password: ""
}


function Login() {
    
        const [state, setState] = useState(initialState);
        const [error1, setError1] = useState("");
        const [error2, setError2] = useState("");

        const bcrypt = require('bcryptjs');
        var salt = bcrypt.genSaltSync(10);
        let history = useHistory();
        

        const handleInput = (e: React.FormEvent<HTMLInputElement>) =>{
            const inputUsername = e.currentTarget.name;
            const value = e.currentTarget.value;

            setState(prev=>({...prev, [inputUsername] : value}));
        };
 
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            
            e.preventDefault();
            if(state.email=="")
            {
                setError1('Enter email');
            }
            else if(state.password=="")
            {
                setError2('Enter Password');
            }
            else
            {
                const dbObject = users.filter(d => d.email === state.email);
                
                if(dbObject.length>0)
                {
                    console.log(dbObject);
                    console.log(state.password);
                    console.log(dbObject[0].username);
                    // var currpass = bcrypt.hashSync(state.password, salt);
                    // console.log(currpass);
                    console.log("ppp");
                    console.log(dbObject[0].password);
                    if(dbObject[0].password=== state.password)
                    {
                        console.log("true");
                        // User with correct credentials
                        history.push({
                            pathname: '/profile',
                            state: state.email
                        });
                    }
                    else
                    {
                        setError2("Incorrect Password");
                    }
                }
                else
                {
                    alert('Email not registered')
                }
            }
            
            

            
            
        };
        return(
            <>
                <GlobalStyle/>
                <FormWrapperStyle>
                    <FormStyle onSubmit={handleSubmit} method="POST">
                    <HeadingStyle>
                        <Heading name="Login" />
                    </HeadingStyle>
                    <label>Email:</label>
                    <InputArea
                        type="email"
                        name="email"
                        autoComplete="off"
                        value={state.email}
                        onChange={handleInput}
                        required
                    />
                    {error1 && (
                        <ErrorStyle>
                        <p>**{error1}</p>
                        </ErrorStyle>
                    )}
                    <label>Password:</label>
                    <InputArea
                        type="password"
                        name="password"
                        autoComplete="off"
                        value={state.password}
                        onChange={handleInput}
                        required
                    />
                    {error2 && (
                        <ErrorStyle>
                        <p>**{error2}</p>
                        </ErrorStyle>
                    )}
                    <NewUserRegistration name="Not a user?" linkText="Register now!" />
                    
                       
                    <RegisterButtonStyle type="submit"> Login </RegisterButtonStyle>
                    </FormStyle>
                </FormWrapperStyle>
            </>
            
        )
    
}

export default Login;