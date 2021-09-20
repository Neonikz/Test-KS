import { patients } from "../data/patients";
import { types } from "../types/types";

const initialState = {
    patientsList:[]
}

export const patientReducer = (state = initialState, action) => {
  
    switch(action.type) {

        case types.getPatients:
            return{
                ...state,
                patientsList:[...patients]
            }

        case types.editPatient:{

        }

        default:
            return state;
    }
}
