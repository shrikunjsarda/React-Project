import { render } from '@testing-library/react';
import React, {useState} from 'react';
import GlobalStyle from '../Components/GlobalStyle/GlobalStyle';
import FormStyle from '../Components/Form/FormStyle';
import FormWrapperStyle from '../Components/FormWrapper/FormWrapperStyle';
import HeadingStyle from '../Components/Heading/HeadingStyle';
import Heading from '../Components/Heading/heading_Components';
import InputArea from '../Components/InputArea/InputArea';
import RegisterButtonStyle from '../Components/ButtonRegister/RegisterButtonStyle';
import NewUserRegistration from '../Components/RegistrationLink/NewUserRegistration';


const initialState = {
    username: "",
    password: ""
}

function Login() {
    
        const [state, setState] = useState(initialState);
        const handleInput = (e: React.FormEvent<HTMLInputElement>) =>{
            const inputUsername = e.currentTarget.name;
            const value = e.currentTarget.value;

            setState(prev=>({...prev, [inputUsername] : value}));
        };
        
        // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            
        // }
        return(
            <>
                <GlobalStyle/>
                <FormWrapperStyle>
                    <FormStyle>
                    <HeadingStyle>
                        <Heading name="Login" />
                    </HeadingStyle>
                    <label>Username:</label>
                    <InputArea
                        type="text"
                        name="username"
                        autoComplete="off"
                        value={state.username}
                        onChange={handleInput}
                    />
                    <label>Password:</label>
                    <InputArea
                        type="password"
                        name="password"
                        autoComplete="off"
                        value={state.password}
                        onChange={handleInput}
                    />
                    <NewUserRegistration name="Not a user?" linkText="Register now!"/>
                    
                       
                    <RegisterButtonStyle type="submit"> Login </RegisterButtonStyle>
                    </FormStyle>
                </FormWrapperStyle>
            </>
            
        )
    
}

export default Login;