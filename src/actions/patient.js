import { types } from "../types/types";

export const getPatients = () => ({ type: types.getPatients });

export const setActivePatient = id => ({ type: types.setActivePatient, payload: id });

export const editPatient = id => ({ type: types.editPatient, payload: id });