import {CHANGE_VALVE_DETAIL} from '../actionTypes';

const initialState = {
    valve: {},
    index: -1
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VALVE_DETAIL: {
            const {valve, index} = action.payload;
            return {
                ...state,
                valve: valve,
                index: index
            };
        }
        default:
            return state;
    }
}
