import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { getPatientById } from '../helpers/getPatientById';
import { useForm } from '../hooks/useForm';

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

    const { activePatient } = useSelector( state => state );
    const history = useHistory();
    const classes = useStyles();

    if( !activePatient ) {
        history.replace('/')
    }
    const patientToEdit = getPatientById(activePatient)

    //Custom hook para el manejo del formulario
    const [ formValues, handleInputChange ] = useForm(patientToEdit);
    const { id, patient, dentist, numberOfPlates, startTreatment, finishTreatment } = formValues;


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
                        value={ patient }
                        onChange={ handleInputChange }
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
                        value={ dentist }
                        onChange={ handleInputChange }
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
                        value={ numberOfPlates }
                        onChange={ handleInputChange }
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
                        value={ startTreatment }
                        onChange={ handleInputChange }
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
                        value={ finishTreatment }
                        onChange={ handleInputChange }
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