import {CHANGE_CLIENT_DATA, CHANGE_CLIENT_NAME} from '../actionTypes';

const initialState = {
    records: {},
    clientName: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CLIENT_DATA: {
            const records = action.payload;
            return {
                ...state,
                records: records,
            };
        }
        case CHANGE_CLIENT_NAME: {
            const clientName = action.payload;
            return {
                ...state,
                clientName: clientName,
            };
        }
        default:
            return state;
    }
}
