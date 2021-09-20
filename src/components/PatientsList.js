import React from 'react';
import {Container, List, makeStyles, Typography } from '@material-ui/core';
import { patients } from '../data/patients';
import { Patient } from './Patient';

export const PatientsList = () => {

    //Estilos del componente
    const useStyles = makeStyles(() => ({
        component:{
            display:"flex",
            flexDirection:'column',
            justifyContent:"center"
        },
        list: {
            marginTop:"30px",
            width: '100%',
            maxWidth: 500,
            display:"flex",
            flexDirection: "column",
            justifyContent: "center"
        },
        title:{
            color:"#fff"
        }
    }));
    const classes = useStyles();



    return (
        <div className={classes.component}>
            <Container
                className={classes.list}
            >
                <Typography
                    variant="h4"
                    align="center"
                    className={classes.title}
                >
                    Lista de pacientes
                </Typography>
                <List 
                    dense={true}
                >
                    {
                        patients.map( patient => (
                            <Patient 
                                key={ patient.id }
                                { ...patient }
                            />
                        ))
                    }  
                </List>
            </Container>
        </div>
    )
}
