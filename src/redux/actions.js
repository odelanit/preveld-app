import {CHANGE_CLIENT} from './actionTypes';

export const changeClient = client => ({
    type: CHANGE_CLIENT,
    payload: client
})
