import {CHANGE_VALVE_TREND} from '../actionTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VALVE_TREND: {
            const data = action.payload;
            return {
                ...state,
                data,
            };
        }
        default:
            return state;
    }
}
