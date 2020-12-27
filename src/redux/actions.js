import {
    CHANGE_CLIENT_DATA,
    CHANGE_CLIENT_NAME,
    CHANGE_VALVE_DETAIL,
    CHANGE_VALVE_TREND,
    CHANGE_WRAP_DETAIL,
    CHANGE_WRAP_TREND,
    SET_VALVE_ID,
    SET_WRAP_ID,
} from './actionTypes';

export const changeClientData = clientData => ({
    type: CHANGE_CLIENT_DATA,
    payload: clientData
})

export const changeClientName = clientName => ({
    type: CHANGE_CLIENT_NAME,
    payload: clientName
})

export const changeWrapDetail = (wrap, index) => ({
    type: CHANGE_WRAP_DETAIL,
    payload: {
        wrap: wrap,
        index: index
    }
})

export const changeValveDetail = (valve, index) => ({
    type: CHANGE_VALVE_DETAIL,
    payload: {
        valve: valve,
        index: index
    }
})

export const changeWrapTrend = trendData => ({
    type: CHANGE_WRAP_TREND,
    payload: trendData
})

export const changeValveTrend = trendData => ({
    type: CHANGE_VALVE_TREND,
    payload: trendData
})

export const setValveId = valveId => ({
    type: SET_VALVE_ID,
    payload: valveId
})

export const setWrapId = wrapId => ({
    type: SET_WRAP_ID,
    payload: wrapId
})
