import { patients } from "../data/patients";
import { types } from "../types/types";

const initialState = {
    patientsList:[],
    activePatient:null
}

export const patientReducer = (state = initialState, action) => {
  
    switch(action.type) {

        case types.getPatients:
            return{
                ...state,
                patientsList: (state.patientsList.length === 0) ?[...patients] : [...state.patientsList]
            }

        case types.setActivePatient:
            return{
                ...state,
                activePatient: action.payload
            }

        case types.editPatient:
            return{
                ...state,
                patientsList: state.patientsList.map(
                    p => ( p.id === action.payload.id ) ? action.payload : p
                )
            }

        

        default:
            return state;
    }
}
