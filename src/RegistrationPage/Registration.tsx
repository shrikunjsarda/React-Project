import { render } from '@testing-library/react';
import React, {useState} from 'react';
import  {useHistory} from 'react-router-dom';
import axios from 'axios';
import GlobalStyle from '../Components/GlobalStyle/GlobalStyle';
import FormStyle from '../Components/Form/FormStyle';
import FormWrapperStyle from '../Components/FormWrapper/FormWrapperStyle';
import HeadingStyle from '../Components/Heading/HeadingStyle';
import Heading from '../Components/Heading/heading_Components';
import InputArea from '../Components/InputArea/InputArea';
import RegisterButtonStyle from '../Components/ButtonRegister/RegisterButtonStyle';
import NewUserRegistration from '../Components/RegistrationLink/NewUserRegistration';
import ErrorStyle from '../Components/ErrorStyle/ErrorStyle';

const initialState = {
    username: "",
    email:"",
    password: "",
    confirmPassword:"",
    contactNumber:""
}
function Register() {

        let history = useHistory();
        var passwordHash = require('password-hash');

        const [state, setState] = useState(initialState);
        const minLength = 8;
        const handleInput = (e: React.FormEvent<HTMLInputElement>) =>{
            const inputUsername = e.currentTarget.name;
            const value = e.currentTarget.value;
            setState(prev=>({...prev, [inputUsername] : value}));
        };
        const [error1, setError1] = useState("");
        const [error2, setError2] = useState("");
        const [error3, setError3] = useState("");
        const [error4, setError4] = useState("");

        const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
            e.preventDefault();
            console.log(state);
            const regx = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            var f1=0,f2=0,f3=0,f4=0;
            if(state.email==="")
            setError1('Enter email');
            else if(regx.test(state.email) === false)
            setError1('Invalid Email');
            else
            {
            setError1('');
            f1=1;
            }
            // console.log(error1);
            if(state.password==="")
            setError2('Enter password');
            else
            {
            setError2('');
            f2=1;
            }
            if(state.confirmPassword==="")
            setError3('Enter confirm password');
            else if(state.password != state.confirmPassword)
            setError3('Password do not matched');
            else
            {
            setError3('');
            f3=1;
            }
            if(state.contactNumber==="")
            setError4('Enter Contact Number');
            else if(state.contactNumber.length !=10)
            setError4('Contact number must contain 10 digits');
            else
            {
            setError4('');
            f4=1;
            }
            if(f1 && f2 && f3 && f4)
            {
                await axios.post("http://localhost:3334/users", state);
                history.push("/");
                {setTimeout(function()
                    {
                        alert('Your details has been registered.');
                    },
                    500);}

                setState(initialState );
            }
        };

        return(
            <>
                <GlobalStyle/>
                <FormWrapperStyle>
                    <FormStyle>
                    <HeadingStyle>
                        <Heading name="Registration" />
                    </HeadingStyle>
                    <label>Username:</label>
                    <InputArea
                        type="text"
                        name="username"
                        autoComplete="off"
                        value={state.username}
                        onChange={handleInput}
                        required
                    />
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
                        minLength={minLength} 
                        value={state.password}
                        onChange={handleInput}
                        
                        required
                    />
                    {error2 && (
                        <ErrorStyle>
                        <p>**{error2}</p>
                        </ErrorStyle>
                    )}
                    <label>Confirm Password:</label>
                    <InputArea
                        type="password"
                        name="confirmPassword"
                        autoComplete="off"
                        minLength={minLength}
                        value={state.confirmPassword}
                        onChange={handleInput}
                        required
                    />
                    {error3 && (
                        <ErrorStyle>
                        <p>**{error3}</p>
                        </ErrorStyle>
                    )}
                    <label>Contact Number:</label>
                    <InputArea
                        type="number"
                        name="contactNumber"
                        autoComplete="off"
                    
                        value={state.contactNumber}
                        onChange={handleInput}
                        required
                    />
                    {error4 && (
                        <ErrorStyle>
                        <p>**{error4}</p>
                        </ErrorStyle>
                    )}
                    <NewUserRegistration name="Already Registered?" linkText="Login!"/>
                    <RegisterButtonStyle type="submit" onClick = {handleSubmit} > Register </RegisterButtonStyle>
                    </FormStyle>
                </FormWrapperStyle>
            </>
            
        )
    
}

export default Register;