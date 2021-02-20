import { render } from '@testing-library/react';
import React, {useState} from 'react';
import GlobalStyle from '../Components/GlobalStyle/GlobalStyle';
import FormStyle from '../Components/Form/FormStyle';
import FormWrapperStyle from '../Components/FormWrapper/FormWrapperStyle';
import HeadingStyle from '../Components/Heading/HeadingStyle';
import Heading from '../Components/Heading/heading_Components';
import InputArea from '../Components/InputArea/InputArea';
import RegisterButtonStyle from '../Components/ButtonRegister/RegisterButtonStyle';
import RegistrationLinkStyle from '../Components/RegistrationLink/RegistrationLink';
import NewUserRegistration from '../Components/RegistrationLink/NewUserRegistration';
import {users} from '../db.json';
import ErrorStyle from '../Components/ErrorStyle/ErrorStyle';

const initialState = {
    email: "ac@gmail.com",
    currentpassword: "",
    newpassword: "",
    confirmnewpassword: "",
}

function ChangePassword() {
    
        const [state, setState] = useState(initialState);
        const [error1, setError1] = useState("");
        const [error2, setError2] = useState("");
        const bcrypt = require('bcryptjs');


        const handleInput = (e: React.FormEvent<HTMLInputElement>) =>{
            const inputUsername = e.currentTarget.name;
            const value = e.currentTarget.value;

            setState(prev=>({...prev, [inputUsername] : value}));
        };

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault(); 
            const dbObject = users.filter(d => d.email === state.email); // state.email value with email which comes from routing
            
            if(!bcrypt.compareSync(dbObject[0].password, state.currentpassword))
            {
                setError1("Incorrect Password"); 
            }
            else if(state.newpassword != state.confirmnewpassword)
            {
                setError2("New Password and Confirm password is different")
            }
            else
            {
                // write update user password logic here
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
                        value={state.currentpassword}
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
                        value={state.newpassword}
                        onChange={handleInput}
                        required
                    />
                    <label>Confirm New Password:</label>
                    <InputArea
                        type="password"
                        name="confirmnewpassword"
                        autoComplete="off"
                        value={state.confirmnewpassword}
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