import React, { useEffect } from 'react';
import RegistrationLinkStyle from './LinkStyle';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

interface Props {
    name: string;
    linkText: string;
}



function NewUserRegistration(props:Props){
    const history = useHistory();
    const openRegistrationForm =()=>
    {
        
        history.push('/register');
    }
    
        return (
            <p> {props.name} <RegistrationLinkStyle onClick={openRegistrationForm}> {props.linkText} </RegistrationLinkStyle></p>
            
        );
   
}

export default NewUserRegistration;