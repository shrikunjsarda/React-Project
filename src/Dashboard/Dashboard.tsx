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
import {users} from '../db.json';

const initialState = {
    username: "",
    email:"",
    password: "",
    confirmPassword:"",
    contactNumber:""
}

const Dashboard: React.FC = () => {
    const history = useHistory();
    const location = useLocation();
    const userEmail = location.state;

    const [user, setUser] = useState(initialState);

    const dbObject = users.filter(d => d.email === userEmail);

    const idd = dbObject[0].id;

    const index = users.findIndex(x => x.id== idd);
    console.log(index);
    // Add Button
    const handleAdd = () =>{

    }

    // Logout Button
    const handleLogout = () =>{
        history.push('/');
    }
    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        if(dbObject.length>0)
        setUser(dbObject[0]);
    }
    // User Profile Button
    const handleuserprofile = () =>{
        console.log(dbObject[0]);
        setUser(dbObject[0]);
        // console.log("hii")
        // console.log(user);
        history.push({
            pathname: '/profile',
            state: user.email
        });
    }
    
    
    return (
        <>
            
            <DivflexMainHeading>
                <MainHeading  name="Dashboard"/>
                <Div>
                    
                    <AddButton onClick = {handleuserprofile} > User Profile</AddButton>
                    <Button onClick = {handleLogout} >Logout</Button>
                </Div>
            </DivflexMainHeading>
            <DivflexSubHeading>
                <Heading  name="View Properties"/>
                <AddButton onClick = {handleAdd}>Add Property</AddButton>
            </DivflexSubHeading>
            
            <Table list={users[index].properties} />

        </>  
             
         
    
    )
}

export default Dashboard;