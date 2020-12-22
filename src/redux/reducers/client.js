import { CHANGE_CLIENT } from "../actionTypes";

const initialState = {
    client: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CLIENT: {
            const client = action.payload;
            return {
                ...state,
                client: client,
            };
        }
        default:
            return state;
    }
}
