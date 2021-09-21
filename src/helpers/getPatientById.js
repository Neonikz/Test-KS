import { patients } from '../data/patients';
import { formatDate } from './formatDate';

export const getPatientById =  idPatient => {
    const{ id, patient, dentist, numberOfPlates, startTreatment, finishTreatment} = patients.find( patient => patient.id === idPatient );
    const { newStartTreatment, newFinishTreatment } = formatDate(startTreatment,finishTreatment);
    const newPatient = {
        id,
        patient,
        dentist,
        numberOfPlates,
        newStartTreatment,
        newFinishTreatment
    }
    return newPatient;
}