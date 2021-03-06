import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import moment from "moment"
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { formatDate } from '../helpers/formatDate';
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';
import { editPatient } from '../actions/patient';
import { formatDateInverse } from '../helpers/formatDateInverse';

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
    const dispatch = useDispatch();

    if( !activePatient ) {
        history.replace('/')
    }
    
    const { newStartTreatment, newFinishTreatment } = formatDate( activePatient.startTreatment, activePatient.finishTreatment) ;

    //Custom hook para el manejo del formulario
    const [ formValues, handleInputChange ] = useForm({
        id:activePatient.id,
        patient:activePatient.patient,
        dentist:activePatient.dentist,
        numberOfPlates:activePatient.numberOfPlates, 
        startTreatment:newStartTreatment,
        finishTreatment:newFinishTreatment
    });
    const { id,patient, dentist, numberOfPlates, startTreatment, finishTreatment } = formValues;

    const handleSubmit = e => {
        e.preventDefault();
        //Validaciones
        const momentStart = moment(startTreatment);
        const momentEnd = moment(finishTreatment);
        if( momentStart.isSameOrAfter( momentEnd ) ){
            return Swal.fire('Error','La fecha de finalizacion debe de ser mayor a la fecha de inicio', 'error');
        }
        if( !patient.trim() || !dentist.trim() || !numberOfPlates || !startTreatment || !finishTreatment ){
            return Swal.fire('Error','Todos los campos son obligatorios','error');
        }
        const { newStartTreatment, newFinishTreatment} = formatDateInverse( startTreatment,finishTreatment );
        const patientEdited = {
            id,
            patient,
            dentist,
            numberOfPlates,
            startTreatment:newStartTreatment,
            finishTreatment:newFinishTreatment,
        }
        dispatch( editPatient(patientEdited) )
        history.replace('/');
    }

    return (
        <div className={classes.component}>

            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography className={classes.title} component="h1" variant="h5">
                    Editar paciente
                </Typography>
                <form 
                    className={classes.form} 
                    noValidate
                    onSubmit={ handleSubmit }
                >
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