import {CHANGE_WRAP_DETAIL} from '../actionTypes';

const initialState = {
    wrap: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_WRAP_DETAIL: {
            const wrap = action.payload;
            return {
                ...state,
                wrap: wrap,
            };
        }
        default:
            return state;
    }
}
