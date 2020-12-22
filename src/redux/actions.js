import {CHANGE_CLIENT_DATA, CHANGE_CLIENT_NAME} from './actionTypes';

export const changeClientData = clientData => ({
    type: CHANGE_CLIENT_DATA,
    payload: clientData
})

export const changeClientName = clientName => ({
    type: CHANGE_CLIENT_NAME,
    payload: clientName
})
