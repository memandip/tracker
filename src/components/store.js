import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './reducers/userReducer';
import activeUser from './reducers/activeUser';
import activeAdmin from './reducers/activeAdmin';
import loginReducer from './reducers/loginReducer';

const middleware = applyMiddleware(logger);

let allReducers = combineReducers({
    users: userReducer,
    activeUser: activeUser,
    activeAdmin: activeAdmin,
    loggedIn: loginReducer
});

let store = createStore(allReducers, {}, middleware);

export default store;