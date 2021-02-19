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
import ChangePassword from './ChangePassword'
//import NewUserRegistration from '../Components/RegistrationLink/NewUserRegistration';


const initialState = {
    Name: "",
    Email: "",
    Contact: "",
}

function EditProfile() {
    
        const [state, setState] = useState(initialState);
        const handleInput = (e: React.FormEvent<HTMLInputElement>) =>{
            const inputUsername = e.currentTarget.name;
            const value = e.currentTarget.value;

            setState(prev=>({...prev, [inputUsername] : value}));
        };
        return(
            <>
                <GlobalStyle/>
                <FormWrapperStyle>
                    <FormStyle>
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
                        value={state.Email}
                        onChange={handleInput}
                    />
                    <label>Contact:</label>
                    <InputArea
                        type="tel"
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