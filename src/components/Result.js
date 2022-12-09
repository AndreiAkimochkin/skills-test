import React from 'react';
import '../styles/Step.css'
import {useNavigate} from "react-router-dom";
import {useData} from "../DataContext";
import {Button, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";


const Result = () => {

    const {data} = useData();
    const navigate = useNavigate();

    const entries = Object.entries(data);

    const onBack = () => {
        navigate("/step3");
    };
    return (
        <div className='step'>
            <h1 className='title'>Result</h1>
           <Table >
               <TableHead>
                   <TableRow>
                       <TableCell>Field</TableCell>
                       <TableCell align="right">Value</TableCell>
                   </TableRow>
               </TableHead>
               <TableBody>
                   {entries?.map((entry) => (
                       <TableRow key={entry[0]}>
                           <TableCell component="th" scope="row">
                               {entry[0]}
                           </TableCell>
                           <TableCell align="right">{entry[1]?.toString()}</TableCell>
                       </TableRow>
                   ))}
               </TableBody>
           </Table>
            <div className='btn_field'>
                <Button type='submit' variant='contained' color='secondary' onClick={onBack}>
                    Back
                </Button>
            </div>
        </div>
    );
};

export default Result;