import { SET_CITY } from './../actions';
//El reducer es una funcion pura
export const cityReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_CITY:
            return { ...state, city: action.payload }; // agrega city: action.payload, como nuevo valor
        default:
            return state;
    }
}