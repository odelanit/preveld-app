import { combineReducers } from "redux";
import client from './client';
import wrap from './wrap'
import valve from './valve'
import wrapTrend from './wrapTrend';
import valveTrend from './valveTrend';

export default combineReducers({ client, wrap, valve, wrapTrend, valveTrend });
