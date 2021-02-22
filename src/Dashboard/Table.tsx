import React from 'react';
import Button from '../Components/ButtonRegister/Button';
import DeleteButton from '../Components/ButtonRegister/DeleteButton';
import DivflexButton from '../Components/DivFlex/DivflexButton';
import TableStyle from '../Components/TableStyle/Table';
import Tbody from '../Components/TableStyle/Tbody';
import Td from '../Components/TableStyle/Td';
import Th from '../Components/TableStyle/Th';
import Thead from '../Components/TableStyle/Thead';
import Tr from '../Components/TableStyle/Tr';
 type listType ={
     Name: string,
     Address: string,
     Price: number
 }
 type proptype ={
     list: listType[]
 }
const Table:React.FC<proptype> = (props) =>{
    const handleDelete = () =>{

    }

    const handleEdit = () =>{

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
                        props.list.map( Property =>(
                            
                            <Tr>
                                
                                <Td colSpan= {2}>{Property.Name}</Td>
                                <Td colSpan={4}>{Property.Address}</Td>
                                <Td colSpan={1}>{Property.Price}</Td>
                                <Td colSpan={1}>
                                    <DivflexButton>
                                        <Button onClick= {handleEdit}>Edit</Button>
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