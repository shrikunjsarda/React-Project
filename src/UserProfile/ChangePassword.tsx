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
//import NewUserRegistration from '../Components/RegistrationLink/NewUserRegistration';


const initialState = {
    currentpassword: "",
    newpassword: "",
    confirmnewpassword: "",
}

function ChangePassword() {
    
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
                        <Heading name="Change Password" />
                    </HeadingStyle>
                    <label>Current Password:</label>
                    <InputArea
                        type="password"
                        name="currentpassword"
                        autoComplete="off"
                        value={state.currentpassword}
                        onChange={handleInput}
                    />
                    <label>New Password:</label>
                    <InputArea
                        type="password"
                        name="newpassword"
                        autoComplete="off"
                        value={state.newpassword}
                        onChange={handleInput}
                    />
                    <label>Confirm New Password:</label>
                    <InputArea
                        type="password"
                        name="confirmnewpassword"
                        autoComplete="off"
                        value={state.confirmnewpassword}
                        onChange={handleInput}
                    />
                    
                       
                    <RegisterButtonStyle type="submit"> Save </RegisterButtonStyle>
                    </FormStyle>
                </FormWrapperStyle>
            </>
            
        )
    
}

export default ChangePassword;