import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//Estilos del formulario
const useStyles = makeStyles((theme) => ({
    component:{
        display:"flex",
        padding:"20px",
        backgroundColor: "#0d2235"
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        marginTop: theme.spacing(1),
        backgroundColor: "#fff",
        padding:"10px 20px 10px 20px",
        borderRadius: "5px",
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    title:{
        color:"#fff",
    },
}));

export const EditPatientForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.component}>

            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography className={classes.title} component="h1" variant="h5">
                Editar paciente
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="patient"
                        label="Nombre del paciente"
                        name="patient"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="dentist"
                        label="Odontologo"
                        type="text"
                        id="dentist"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="numberOfPlates"
                        label="Numero de placas"
                        type="number"
                        id="numberOfPlates"
                    />
                    <TextField
                        id="startTreatment"
                        label="Inicio del tratamiento"
                        type="date"
                        required
                        name="startTreatment"
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                    <TextField
                        id="finishTreatment"
                        label="Fin del tratamiento"
                        margin="normal"
                        required
                        type="date"
                        name="finishTreatment"
                        fullWidth
                        variant="outlined"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        fullWidth
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Guardar
                    </Button>
                </form>
            </div>
            </Container>
    </div>  
    );
}