import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './reducers/userReducer';
import activeUser from './reducers/activeUser';
import activeAdmin from './reducers/activeAdmin';

const middleware = applyMiddleware(logger);

let allReducers = combineReducers({
    users: userReducer,
    activeUser: activeUser,
    activeAdmin: activeAdmin
});

let store = createStore(allReducers, {}, middleware);

export default store;