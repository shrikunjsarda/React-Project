import React, { useState } from 'react';
import Button from '../Components/ButtonRegister/Button';
import DeleteButton from '../Components/ButtonRegister/DeleteButton';
import DivflexButton from '../Components/DivFlex/DivflexButton';
import TableStyle from '../Components/TableStyle/Table';
import Tbody from '../Components/TableStyle/Tbody';
import Td from '../Components/TableStyle/Td';
import Th from '../Components/TableStyle/Th';
import Thead from '../Components/TableStyle/Thead';
import Tr from '../Components/TableStyle/Tr';
import 'react-responsive-modal/styles.css';
import { Modal } from "react-responsive-modal";
import HeadingStyle from '../Components/Heading/HeadingStyle';
import InputArea from '../Components/InputArea/InputArea';
import Heading from '../Components/Heading/heading_Components';
import RegisterButtonStyle from '../Components/ButtonRegister/RegisterButtonStyle';
import {properties} from '../db.json';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router';
import ErrorStyle from '../Components/ErrorStyle/ErrorStyle';
import { grey } from '@material-ui/core/colors';
 
const initialPropertyStateState = {
     Name: "",
     Email: "",
     Address: "",
     Price: "",
     id: 0
 }

 type listType ={
     Name: string,
     Address: string,
     Price: string,
     id: number
 }
 type proptype ={
     list?: listType[] | null
 }
const Table:React.FC<proptype> = (props) =>{

    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [state, setState] = useState(initialPropertyStateState);
    const [error1, setError1] = useState("");


    const onOpenModal = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const idd = Number(e.currentTarget.name);
        const dbPropeties = properties.filter( d => d.id == idd);
        // console.log(dbPropeties);
        setState(dbPropeties[0])
        setOpen(true);
    }
    
    const onCloseModal = () => setOpen(false);

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        
        const inputUsername = e.currentTarget.name;
        const value = e.currentTarget.value;
            
        setState(prev=>({...prev, [inputUsername] : value}));
    };

    // delete button
    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        const idd = Number(e.currentTarget.name);
        const dbPropeties = properties.filter( d => d.id == idd);
        const idx = dbPropeties[0].id;
        await axios.delete(`http://localhost:3334/properties/${idx}`);
    }

    // edit button 
    const handleSave = async() =>{
        if (state.Name === "" || state.Address === "" || state.Price === "") {
            setOpen(true);
            setError1('All fields are required');
        }
        else {
            setOpen(false);
            setError1('');
            await axios.put(`http://localhost:3334/properties/${state.id}`, state);
                history.push({pathname :'/dashboard',
                    state: state.Email
                });
        }
    }

    

    return (
        <>
            <TableStyle>
                <Thead>
                    <Tr>
                        <Th colSpan= {2}>Name</Th>
                        <Th colSpan= {4}>Address</Th>
                        <Th colSpan= {1}>Price</Th>
                        <Th colSpan= {1}>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {props.list?.length !== 0 ? (
                        
                            props.list && props.list.map( Property =>(
                                
                                <Tr>
                                    
                                    <Td colSpan= {2}>{Property.Name}</Td>
                                    <Td colSpan={4}>{Property.Address}</Td>
                                    <Td colSpan={1}>{Property.Price}</Td>
                                    <Td colSpan={1}>
                                        <DivflexButton>
                                            <Button onClick= {onOpenModal} name={String(Property.id)}>Edit</Button>
                                            <Modal styles={{ overlay: { background: "#02020225" } }} open={open} onClose={onCloseModal} center>
    
                                                <div style={{width: "500px"}}>
                                                
                                                <HeadingStyle>
                                                    <Heading name="Edit Property" />
                                                </HeadingStyle>
                                                <label>Name:</label>
                                                <InputArea
                                                    type="text"
                                                    name="Name"
                                                    autoComplete="off"
                                                    value ={state.Name}
                                                    onChange={handleInput}
                                                    required
                                                />
                                                
                                                
                                                <label>Address:</label>
                                                <InputArea
                                                    type="text"
                                                    name="Address"
                                                    autoComplete="off"
                                                    value ={state.Address}
                                                    onChange={handleInput}
                                                    required
                                                />
                                                
    
                                                <label>Price:</label>
                                                <InputArea
                                                    type="number"
                                                    name="Price"
                                                    autoComplete="off"
                                                    value ={state.Price}
                                                    onChange={handleInput}
                                                    required
                                                />
                                                
                                                
                                                <RegisterButtonStyle type="submit" onClick={handleSave}> Save </RegisterButtonStyle>
                                                {error1 && (
                                                    <ErrorStyle>
                                                    <p>**{error1}</p>
                                                    </ErrorStyle>
                                                )}
                                                
                                                </div>
                                                
                                            
                                            </Modal>
                                            <DeleteButton onClick = {handleDelete} name={String(Property.id)}>Delete</DeleteButton>
                                        </DivflexButton>
                                            
                                            
                                        
                                    </Td>
                                </Tr>
                            ))
                        
                    ) : (
                        <Tr>
                            <Td colSpan={8} style={{color: "grey"}}> No Properties</Td>
                        </Tr>
                    )}
                </Tbody>    
            </TableStyle>     
        </>
    );
}

export default Table;