import React, { useEffect, useState } from 'react';
import Button from '../Components/ButtonRegister/Button';
import RegisterButtonStyle from '../Components/ButtonRegister/RegisterButtonStyle';
import Divflex from '../Components/DivFlex/DivFlex';
import DivflexMainHeading from '../Components/DivFlex/DivflexMainHeading';
import GlobalStyle from '../Components/GlobalStyle/GlobalStyle';
import Heading from '../Components/Heading/heading_Components';
import MainHeading from '../Components/Heading/MainHeading';
import Table from './Table';
import DivflexSubHeading from '../Components/DivFlex/DivflexSubHeading';
import AddButton from '../Components/ButtonRegister/AddButton';
import Div from '../Components/DivFlex/Div';
// import { AccountCircle } from '@material-ui/icons';
import Span from '../Components/DivFlex/Span';
import { useHistory, useLocation } from 'react-router';
import {users, properties} from '../db.json';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import HeadingStyle from '../Components/Heading/HeadingStyle';
import InputArea from '../Components/InputArea/InputArea';
import axios from 'axios';



const initialPropertyState = {
    Email: "",
    Name:"",
    Address:"",
    Price:""

}

const Dashboard: React.FC = () => {
    const history = useHistory();
    const location = useLocation();
    const userEmail = location.state;


    
    const [propertyState, setPropertyState] = useState(initialPropertyState);
    const dbPropeties =  properties.filter ( d => d.Email ===userEmail );

    // logout 
    const handleLogout = () =>{
        history.push('/');
    }
    // useEffect(() => {
    //     loadUser()
    // }, [])
    // const loadUser = async () => {
    //     setPropertyState( prev =>({...prev, Email: userEmail}))
    // }


    // pop up form
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        const inputUsername = e.currentTarget.name;
        const value = e.currentTarget.value;
            
        setPropertyState(prev=>({...prev, [inputUsername] : value}));
    };


    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        
        setPropertyState( prev => ({...prev, Email: userEmail}))
        console.log(userEmail)
        propertyState.Email = userEmail;
        setOpen(false);
        await axios.post(`http://localhost:3334/properties`, propertyState);
        history.push({
            pathname: '/dashboard',
            state: userEmail
        });
    }

    const handleUserProfile = () =>{
        history.push({
            pathname: '/profile',
            state: userEmail
        });
    }

    
    
    return (
        <>
            
            <DivflexMainHeading>
                <MainHeading  name="Dashboard"/>
                <Div>
                    
                    <AddButton onClick = {handleUserProfile} > User Profile</AddButton>
                    <Button onClick = {handleLogout} >Logout</Button>
                </Div>
            </DivflexMainHeading>
            <DivflexSubHeading>
                <Heading  name="View Properties"/>
                <AddButton onClick = {onOpenModal}>Add Property</AddButton>
                <Modal styles={{ overlay: { background: "#02020250" } }} open={open} onClose={onCloseModal} center>
                
                    <div style={{width: "500px"}}>
                    <HeadingStyle>
                        <Heading name="Add Property" />
                    </HeadingStyle>
                    <label>Name:</label>
                    <InputArea
                        type="text"
                        name="Name"
                        autoComplete="off"
                        required
                        onChange={handleInput}
                    />
                    
                    <label>Address:</label>
                    <InputArea
                        type="text"
                        name="Address"
                        autoComplete="off"
                        required
                        onChange={handleInput}
                    />
                    <label>Price:</label>
                    <InputArea
                        type="number"
                        name="Price"
                        autoComplete="off"
                        required
                        onChange={handleInput}
                    />
                    
                    <RegisterButtonStyle type="submit" onClick={handleSubmit}> Submit </RegisterButtonStyle>
                    </div>
                
                </Modal>
            </DivflexSubHeading>
            
            <Table list={dbPropeties} />

        </>  
             
         
    
    )
}

export default Dashboard;