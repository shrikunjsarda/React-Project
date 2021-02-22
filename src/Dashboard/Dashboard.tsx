import React from 'react';
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



const Dashboard: React.FC = () => {

    const handleAdd = () =>{

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
                    
                    <AddButton onClick = {handleuserprofile} > <Div><AccountCircle/><Span>User Profile</Span></Div></AddButton>
                    <Button onClick = {handleLogout} >Logout</Button>
                </Div>
            </DivflexMainHeading>
            <DivflexSubHeading>
                <Heading  name="View Properties"/>
                <AddButton onClick = {handleAdd}>Add Property</AddButton>
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