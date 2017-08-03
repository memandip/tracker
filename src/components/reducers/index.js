import { combineReducers } from 'redux';
import userReducer from './userReducer';

let reducers = combineReducers({
    users: userReducer
});

export default reducers;
