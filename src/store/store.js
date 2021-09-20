import { createStore, compose } from 'redux';
import { patientReducer } from '../reducers/patientReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    patientReducer(), 
    composeEnhancers()
);