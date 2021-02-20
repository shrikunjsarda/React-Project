import { render } from '@testing-library/react';
import React, {useState, useEffect} from 'react';
import GlobalStyle from '../Components/GlobalStyle/GlobalStyle';
import FormStyle from '../Components/Form/FormStyle';
import FormWrapperStyle from '../Components/FormWrapper/FormWrapperStyle';
import HeadingStyle from '../Components/Heading/HeadingStyle';
import Heading from '../Components/Heading/heading_Components';
//import InputArea from '../Components/InputArea/InputArea';
import RegisterButtonStyle from '../Components/ButtonRegister/RegisterButtonStyle';
import EditProfile from './EditProfile';
import { Link } from 'react-router-dom';
import {users} from '../db.json';

//import NewUserRegistration from '../Components/RegistrationLink/NewUserRegistration';


const userState = {
    Name: "",
    Email: "a@gmail.com",
    Contact: ""
}

function Profile() {
    
        const [state, setState] = useState(userState);
        
        useEffect( () =>{
            const dbObject = users.filter(d => d.email === state.Email); // we have to change state.email with routing me jo email address
            if(dbObject.length >0)
            setState({...state,
                 Name: dbObject[0].username,
                 Email: dbObject[0].email,
                 Contact: dbObject[0].contactNumber
            })
        })
        return(
            <>
                <GlobalStyle/>
                <FormWrapperStyle>
                    <FormStyle>
                    <HeadingStyle>
                        <Heading name="User Profile" />
                    </HeadingStyle>
                    <p>Name: {state.Name}</p>
                    <p>Email: {state.Email}</p>
                    <p>Contact: {state.Contact}</p>
                    
                    <RegisterButtonStyle type="submit" onClick={EditProfile}> Edit </RegisterButtonStyle>
                    </FormStyle>
                </FormWrapperStyle>
            </>
            
        )
    
}

export default Profile;