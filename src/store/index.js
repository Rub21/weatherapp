import { createStore } from 'redux';
//El estado de la apliacion se va a manejar por el store and reducer
import { cityReducer } from './../reducers/city';

const initialState = {
    city: 'Buenos Aires,ar'
};

export const store = createStore(cityReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
