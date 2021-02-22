import React, { useState } from 'react';
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
import { AccountCircle } from '@material-ui/icons';
import Span from '../Components/DivFlex/Span';
import { Modal } from "react-responsive-modal";
import 'react-responsive-modal/styles.css';

import HeadingStyle from '../Components/Heading/HeadingStyle';
import InputArea from '../Components/InputArea/InputArea';



const Dashboard: React.FC = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const handleSubmit = () =>{

    }


    const handleLogout = () =>{

    }

    const handleuserprofile = () =>{

    }

    
    return (
        <>
            
            <DivflexMainHeading>
                <MainHeading  name="Dashboard"/>
                <Div>
                    <AddButton onClick = {handleuserprofile} >User Profile</AddButton>
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
                        name="propertyname"
                        autoComplete="off"
                        required
                    />
                    
                    <label>Address:</label>
                    <InputArea
                        type="text"
                        name="propertyaddress"
                        autoComplete="off"
                        required
                    />
                    <label>Price:</label>
                    <InputArea
                        type="number"
                        name="propertyprice"
                        autoComplete="off"
                        required
                    />
                    
                    <RegisterButtonStyle type="submit" onClick={handleSubmit}> Submit </RegisterButtonStyle>
                    </div>
                
                </Modal>
            </DivflexSubHeading>
            
            <Table list={[{
                Name: "chintan",
                Address: "sdfghjhgfdsdfghjhdsdfgnmfdsdfghnhgfdsdfghgfdsdfghgfdsdfghgfdsdfghgfdsdfbngfdsdfghgfdsdfghgfsadfghngfsdfgnfd",
                Price: 2
            },
            {
                Name: "sadfghfdsadfghchintan",
                Address: "hello",
                Price: 2
            },
            {
                Name: "csdfghjgfdhintan",
                Address: "hello",
                Price: 2
            }]} />

        </>  
             
         
    
    )
}

export default Dashboard;