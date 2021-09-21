import { patients } from '../data/patients';

export const getPatientById =  id => {
    return patients.find( patient => patient.id === id );
}