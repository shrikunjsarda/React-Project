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
import { useHistory, useLocation } from 'react-router-dom';
import {users} from '../db.json';
import { stringify } from 'querystring';

//import NewUserRegistration from '../Components/RegistrationLink/NewUserRegistration';


const userState = {
    Name: "",
    Email: "",
    Contact: ""
}


function Profile() {
    
        const [state, setState] = useState(userState);
        // console.log(state)
        const location = useLocation();
        const userEmail = location.state;
        
        const history = useHistory();
        

        
        const dbObject = users.filter(d => d.email === userEmail); // we have to change state.email with routing me jo email address
        
        if(dbObject.length >0)
        {
            console.log(dbObject);
            state.Name = dbObject[0].username || '';
            state.Email = dbObject[0].email || '';
            state.Contact = dbObject[0].contactNumber || '';
            // console.log(state);
            // setState( {Email:dbObject[0].email || '', Name: dbObject[0].username || '', Contact : dbObject[0].contactNumber || ''});
        }
        
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            history.push(
                {
                    pathname: '/edit_profile',
                    state: state.Email
                });
        }
        return(
            <>
                <GlobalStyle/>
                <FormWrapperStyle>
                    <FormStyle onSubmit={handleSubmit}>
                    <HeadingStyle>
                        <Heading name="User Profile" />
                    </HeadingStyle>
                    
                    <p>Name: {state.Name}</p>
                    <p>Email: {state.Email}</p>
                    <p>Contact: {state.Contact}</p>
                    
                    <RegisterButtonStyle type="submit" > Edit </RegisterButtonStyle>
                    </FormStyle>
                </FormWrapperStyle>
            </>
            
        )
    
}

export default Profile;