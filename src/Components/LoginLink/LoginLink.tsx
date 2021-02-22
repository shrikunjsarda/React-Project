import React, { useEffect } from 'react';
import LinkStyle from '../RegistrationLink/LinkStyle';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

interface Props {
    name: string;
    linkText: string;
}



function LoginFormLink(props:Props){
    const history = useHistory();
    const openLoginForm =()=>
    {
        
        history.push('/');
    }
    
        return (
            <p> {props.name} <LinkStyle onClick={openLoginForm}> {props.linkText} </LinkStyle></p>
            
        );
   
}

export default LoginFormLink;