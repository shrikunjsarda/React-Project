import { render } from '@testing-library/react';
import React, {useState} from 'react';
import GlobalStyle from '../Components/GlobalStyle/GlobalStyle';
import FormStyle from '../Components/Form/FormStyle';
import FormWrapperStyle from '../Components/FormWrapper/FormWrapperStyle';
import HeadingStyle from '../Components/Heading/HeadingStyle';
import Heading from '../Components/Heading/heading_Components';
//import InputArea from '../Components/InputArea/InputArea';
import RegisterButtonStyle from '../Components/ButtonRegister/RegisterButtonStyle';
import EditProfile from './EditProfile'
import { Link } from 'react-router-dom'
//import NewUserRegistration from '../Components/RegistrationLink/NewUserRegistration';


const userState = {
    Name: "Shrikunj Sarda",
    Email: "shrikunj.sarda@oyorooms.com",
    Contact: "9404634421"
}

function Profile() {
    
        //const [state, setState] = useState(userState);
        return(
            <>
                <GlobalStyle/>
                <FormWrapperStyle>
                    <FormStyle>
                    <HeadingStyle>
                        <Heading name="User Profile" />
                    </HeadingStyle>
                    <p>Name: {userState.Name}</p>
                    <p>Email: {userState.Email}</p>
                    <p>Contact: {userState.Contact}</p>
                    
                    <RegisterButtonStyle type="submit" onClick={EditProfile}> Edit </RegisterButtonStyle>
                    
                    

                    </FormStyle>
                </FormWrapperStyle>
            </>
            
        )
    
}

export default Profile;