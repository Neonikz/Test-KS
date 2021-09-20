import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core';
import { AiFillEdit } from "react-icons/ai";

export const Patient = ({id, patient, dentist, numberOfPlates, startTreatment, finishTreatment}) => {

    //Estilos de cada paciente
    const useStyles = makeStyles((theme) => ({
        item:{
            marginBottom:"10px",
            padding: "10px",
            display:"flex",
            justifyContent:"center",
            width:"100%",
            backgroundColor: theme.palette.secondary.main,
            borderRadius:"10px"
        },
        icon:{
            fontSize:"1.8rem",
            marginLeft:"5px",
            color:"#2E2E2E",
            '&:hover':{
                cursor: "pointer",
                color:"#000",
            },
        }
    }));
    const classes = useStyles();

    return (
        <TableRow key={patient.id}>
            <TableCell component="th" scope="row">{patient}</TableCell>
            <TableCell align="right">{dentist}</TableCell>
            <TableCell align="right">{numberOfPlates}</TableCell>
            <TableCell align="right">{startTreatment}</TableCell>
            <TableCell align="right">{finishTreatment}</TableCell>
            <TableCell align="right"><AiFillEdit className={classes.icon}/></TableCell>
        </TableRow>
    )
}