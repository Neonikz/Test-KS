import { types } from "../types/types";

export const getPatients = () => ({ type: types.getPatients });

export const setActivePatient = data => ({ type: types.setActivePatient, payload: data });

export const editPatient = data => ({ type: types.editPatient, payload:data });