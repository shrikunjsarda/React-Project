import { render } from '@testing-library/react';
import React, {useEffect, useState} from 'react';
import GlobalStyle from '../Components/GlobalStyle/GlobalStyle';
import FormStyle from '../Components/Form/FormStyle';
import FormWrapperStyle from '../Components/FormWrapper/FormWrapperStyle';
import HeadingStyle from '../Components/Heading/HeadingStyle';
import Heading from '../Components/Heading/heading_Components';
import InputArea from '../Components/InputArea/InputArea';
import ErrorStyle from '../Components/ErrorStyle/ErrorStyle';
import RegisterButtonStyle from '../Components/ButtonRegister/RegisterButtonStyle';
import RegistrationLinkStyle from '../Components/RegistrationLink/LinkStyle';
import ChangePassword from './ChangePassword';
import {users} from '../db.json';
import axios from 'axios';
import {useHistory, useLocation, useParams} from 'react-router-dom';
import { Interface } from 'readline';
//import NewUserRegistration from '../Components/RegistrationLink/NewUserRegistration';


const initialState = {
    username: "",
    email:"",
    password: "",
    confirmPassword:"",
    contactNumber:""
    
}

function EditProfile() {
    
        const [state, setState] = useState(initialState);
        const [error1, setError1] = useState("");
        const [error2, setError2] = useState("");
        const bcrypt = require('bcryptjs');

        const location = useLocation();
        let history  = useHistory();
        const {id} = useParams<{id:string}>();
        const userEmail = location.state;
        const dbObject = users.filter(d => d.email === userEmail); // state.email value with email which comes from routing
        const idd = dbObject[0].id;
        
        
        
        const handleInput = (e: React.FormEvent<HTMLInputElement>) =>{
            const inputUsername = e.currentTarget.name;
            const value = e.currentTarget.value;
            
            setState(prev=>({...prev, [inputUsername] : value}));

        };

        


        useEffect(() => {
            loadUser()
        }, [])
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault(); 
            
            if(state.contactNumber.length!=10)
            setError1('Contact number must contain 10 digits');
            
            else
            {
                await axios.put(`http://localhost:3334/users/${idd}`, state);
                history.push({pathname :'/dashboard',
                    state: userEmail
                });
                // write update logic here
            }
            
            
        }

        const loadUser = async () => {
            if(dbObject.length>0)
            setState(dbObject[0]);
        }

        const openChangePasswordPage =()=>
        {
            
            history.push({
                pathname:'/password_change',
                state: state.email
            });
        }
        return(
            <>
                <GlobalStyle/>
                <FormWrapperStyle>
                    <FormStyle onSubmit ={handleSubmit} method="POST">
                    <HeadingStyle>
                        <Heading name="Edit Profile" />
                    </HeadingStyle>
                    <label>Name:</label>
                    <InputArea
                        type="text"
                        name="username"
                        autoComplete="off"
                        value={state.username}
                        onChange={handleInput}
                    />
                    <label>Email:</label>
                    <InputArea
                        type="email"
                        name="email"
                        autoComplete="off"
                        placeholder={state.email}
                        onChange={handleInput}
                        readOnly
                    />
                    <label>Contact Number:</label>
                    <InputArea
                        type="tel"
                        name="contactNumber"
                        autoComplete="off"
                        value={state.contactNumber}
                        onChange={handleInput}
                    />
                    {error1 && (
                        <ErrorStyle>
                        <p>**{error1}</p>
                        </ErrorStyle>
                    )}
                    
                    <RegistrationLinkStyle onClick={openChangePasswordPage}> Change Password </RegistrationLinkStyle>
                    <p></p>
                    <RegisterButtonStyle type="submit"> Save </RegisterButtonStyle>
                    
                    </FormStyle>
                </FormWrapperStyle>
            </>
            
        )
    
}

export default EditProfile;