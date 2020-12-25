import {CHANGE_VALVE_DETAIL} from '../actionTypes';

const initialState = {
    valve: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VALVE_DETAIL: {
            const valve = action.payload;
            return {
                ...state,
                valve: valve,
            };
        }
        default:
            return state;
    }
}
