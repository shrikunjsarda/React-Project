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
import { rgbToHex } from '@material-ui/core';




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

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    //
    const handleDelete = () =>{
        
    }

    // edit button 
    const handleSave = () =>{

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
                    {
                        props.list && props.list.map( Property =>(
                            
                            <Tr>
                                
                                <Td colSpan= {2}>{Property.Name}</Td>
                                <Td colSpan={4}>{Property.Address}</Td>
                                <Td colSpan={1}>{Property.Price}</Td>
                                <Td colSpan={1}>
                                    <DivflexButton>
                                        <Button onClick= {onOpenModal}>Edit</Button>
                                        <Modal styles={{ overlay: { background: "#02020225" } }} open={open} onClose={onCloseModal} center>
                
                                            <div style={{width: "500px"}}>
                                            <HeadingStyle>
                                                <Heading name="Edit Property" />
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
                                            
                                            <RegisterButtonStyle type="submit" onClick={handleSave}> Save </RegisterButtonStyle>
                                            </div>
                                        
                                        </Modal>
                                        <DeleteButton onClick = {handleDelete}>Delete</DeleteButton>
                                    </DivflexButton>
                                        
                                        
                                    
                                </Td>
                            </Tr>
                        ))
                    }
                </Tbody>    
            </TableStyle>     
        </>
    );
}

export default Table;