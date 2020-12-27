import { combineReducers } from "redux";
import client from './client';
import wrap from './wrap'
import valve from './valve'
import wrapTrend from './wrapTrend';
import valveTrend from './valveTrend';
import latest from './latest';

export default combineReducers({ client, wrap, valve, wrapTrend, valveTrend, latest});
