import {SET_VALVE_ID, SET_WRAP_ID} from '../actionTypes';

const initialState = {
    valveId: -1,
    wrapId: -1
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_VALVE_ID: {
            const valveId = action.payload;
            return {
                ...state,
                valveId: valveId,
            };
        }
        case SET_WRAP_ID: {
            const wrapId = action.payload;
            return {
                ...state,
                wrapId: wrapId
            }
        }
        default:
            return state;
    }
}
