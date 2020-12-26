import {
    CHANGE_CLIENT_DATA,
    CHANGE_CLIENT_NAME,
    CHANGE_VALVE_DETAIL,
    CHANGE_VALVE_TREND,
    CHANGE_WRAP_DETAIL,
    CHANGE_WRAP_TREND,
} from './actionTypes';

export const changeClientData = clientData => ({
    type: CHANGE_CLIENT_DATA,
    payload: clientData
})

export const changeClientName = clientName => ({
    type: CHANGE_CLIENT_NAME,
    payload: clientName
})

export const changeWrapDetail = wrap => ({
    type: CHANGE_WRAP_DETAIL,
    payload: wrap
})

export const changeValveDetail = valve => ({
    type: CHANGE_VALVE_DETAIL,
    payload: valve
})

export const changeWrapTrend = trendData => ({
    type: CHANGE_WRAP_TREND,
    payload: trendData
})

export const changeValveTrend = trendData => ({
    type: CHANGE_VALVE_TREND,
    payload: trendData
})
