import React from 'react'
import { AppRouter } from './routes/AppRouter'
import { Provider } from 'react-redux';
import { store } from './store/store'
import './index.css';

export const TestKsApp = () => {

    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
