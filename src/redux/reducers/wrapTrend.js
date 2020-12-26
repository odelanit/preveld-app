import {CHANGE_WRAP_TREND} from '../actionTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_WRAP_TREND: {
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
