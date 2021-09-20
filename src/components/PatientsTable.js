import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container,Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { patients } from '../data/patients';
import { Patient } from './Patient';

export const PatientsTable = () => {

    //Estilos del componente
    const useStyles = makeStyles(() => ({
        component:{
            display:"flex",
            flexDirection:'column',
            justifyContent:"center"
        },
        container: {
            width: '100%',
            maxWidth: 650,
            display:"flex",
            flexDirection: "column",
            justifyContent: "center"
        },
        title:{
            color:"#fff",
            marginTop: "10px",
            marginBottom: "10px",
        },
        columnTitle:{
            fontWeight:"bold",
        }

    }));
    const classes = useStyles();



    return (
        <div className={classes.component}>
            <Container
                className={classes.container}
            >
                <Typography
                    variant="h4"
                    align="center"
                    className={classes.title}
                >
                    Lista de pacientes
                </Typography>
                <TableContainer
                    component={Paper}
                >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.columnTitle}align="center">Paciente</TableCell>
                                <TableCell className={classes.columnTitle}align="center">Odontologo</TableCell>
                                <TableCell className={classes.columnTitle}align="center">Cantidad de placas</TableCell>
                                <TableCell className={classes.columnTitle}align="center">Inicio del tratamiento</TableCell>
                                <TableCell className={classes.columnTitle}align="center">Fin del tratamiento</TableCell>
                                <TableCell className={classes.columnTitle}align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                patients.map( patient => (
                                    <Patient 
                                        key={ patient.id }
                                        { ...patient }
                                        />
                                ))
                            }  
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}