import {CHANGE_WRAP_DETAIL} from '../actionTypes';

const initialState = {
    wrap: {},
    index: -1
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_WRAP_DETAIL: {
            const {wrap, index} = action.payload;
            return {
                ...state,
                wrap: wrap,
                index: index
            };
        }
        default:
            return state;
    }
}
