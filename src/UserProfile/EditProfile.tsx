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
import ChangePassword from './ChangePassword';
import {users} from '../db.json';
//import NewUserRegistration from '../Components/RegistrationLink/NewUserRegistration';


const initialState = {
    Name: "",
    Email: "",
    Contact: "",
}

function EditProfile() {
    
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
            const dbObject = users.filter(d => d.email === state.Email); // state.email value with email which comes from routing
            // write update logic here
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
                        name="name"
                        autoComplete="off"
                        value={state.Name}
                        onChange={handleInput}
                    />
                    <label>Email:</label>
                    <InputArea
                        type="email"
                        name="email"
                        autoComplete="off"
                        placeholder={state.Email}
                        onChange={handleInput}
                        readOnly
                    />
                    <label>Contact Number:</label>
                    <InputArea
                        type="number"
                        name="contact"
                        autoComplete="off"
                        value={state.Contact}
                        onChange={handleInput}
                    />
                    
                    <RegistrationLinkStyle> Change Password </RegistrationLinkStyle>
                    <p></p>
                    <RegisterButtonStyle type="submit"> Save </RegisterButtonStyle>
                    
                    </FormStyle>
                </FormWrapperStyle>
            </>
            
        )
    
}

export default EditProfile;