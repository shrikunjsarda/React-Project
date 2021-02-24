import { render } from '@testing-library/react';
import React, {useEffect, useState} from 'react';
import GlobalStyle from '../Components/GlobalStyle/GlobalStyle';
import FormStyle from '../Components/Form/FormStyle';
import FormWrapperStyle from '../Components/FormWrapper/FormWrapperStyle';
import HeadingStyle from '../Components/Heading/HeadingStyle';
import Heading from '../Components/Heading/heading_Components';
import InputArea from '../Components/InputArea/InputArea';
import RegisterButtonStyle from '../Components/ButtonRegister/RegisterButtonStyle';
import RegistrationLinkStyle from '../Components/RegistrationLink/LinkStyle';
import NewUserRegistration from '../Components/RegistrationLink/NewUserRegistration';
import {users} from '../db.json';
import ErrorStyle from '../Components/ErrorStyle/ErrorStyle';
import { useLocation, useHistory} from 'react-router';
import axios from 'axios';

const initialCurrState = {
    email: "",
    currentpassword: "",
    newpassword: "",
    confirmnewpassword: "",
}

const initialState = {
    username: "",
    email:"",
    password: "",
    confirmPassword:"",
    contactNumber:""
}


function ChangePassword() {
    
        const [currState, setCurrState] = useState(initialCurrState);
        const [state, setState] = useState(initialState);
        const [error1, setError1] = useState("");
        const [error2, setError2] = useState("");
        const bcrypt = require('bcryptjs');
        const location = useLocation();
        const history = useHistory();
        const userEmail = location.state;
        const minLength = 8;
        

        const dbObject = users.filter(d => d.email === userEmail); // state.email value with email which comes from routing
        

        const id=dbObject[0].id;
        useEffect(() => {
            loadUser()
        }, [])
        const loadUser = async () => {
            if(dbObject.length>0)
            setState(dbObject[0]);
        }
        const handleInput = (e: React.FormEvent<HTMLInputElement>) =>{
            const inputUsername = e.currentTarget.name;
            const value = e.currentTarget.value;

            setCurrState(prev=>({...prev, [inputUsername] : value}));
        };

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault(); 
            
            
            if(dbObject[0].password != currState.currentpassword)
            {
                setError1("Incorrect Password"); 
            }
            else if(currState.newpassword != currState.confirmnewpassword)
            {
                setError2("New Password and Confirm password is different")
            }
            else
            {
                state.password = currState.newpassword;
                state.confirmPassword = currState.confirmnewpassword;
                
                await axios.put(`http://localhost:3334/users/${id}`, state);
                history.push({pathname :'/dashboard',
                    state: userEmail
                });
            }

        }

        return(
            <>
                <GlobalStyle/>
                <FormWrapperStyle>
                    <FormStyle onSubmit={handleSubmit} method ="POST">
                    <HeadingStyle>
                        <Heading name="Change Password" />
                    </HeadingStyle>
                    <label>Current Password:</label>
                    <InputArea
                        type="password"
                        name="currentpassword"
                        autoComplete="off"
                        value={currState.currentpassword}
                        onChange={handleInput}
                        required
                    />
                    {error1 && (
                        <ErrorStyle>
                        <p>**{error1}</p>
                        </ErrorStyle>
                    )}
                    <label>New Password:</label>
                    <InputArea
                        type="password"
                        name="newpassword"
                        autoComplete="off"
                        value={currState.newpassword}
                        minLength={minLength}
                        onChange={handleInput}
                        required
                    />
                    <label>Confirm New Password:</label>
                    <InputArea
                        type="password"
                        name="confirmnewpassword"
                        autoComplete="off"
                        value={currState.confirmnewpassword}
                        minLength={minLength}
                        onChange={handleInput}
                        required
                    />
                    {error2 && (
                        <ErrorStyle>
                        <p>**{error2}</p>
                        </ErrorStyle>
                    )}
                    
                       
                    <RegisterButtonStyle type="submit" > Save </RegisterButtonStyle>
                    </FormStyle>
                </FormWrapperStyle>
            </>
            
        )
    
}

export default ChangePassword;