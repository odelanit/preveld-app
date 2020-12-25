import { combineReducers } from "redux";
import client from './client';
import wrap from './wrap'
import valve from './valve'

export default combineReducers({ client, wrap, valve });
