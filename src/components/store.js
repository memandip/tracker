import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './reducers/userReducer';
import firebase from './firebase.config';
import $ from 'jquery';

let userDb = firebase.database().ref('users');
let initialUsers = {};
userDb.on('value', (snap) => {
    initialUsers = snap.val();
    // store.dispatch({type:'FETCH_USER',payload:snap.val()})
});

let filterReducer = (state = {}, action) => {
    switch(action.type){
        case 'FILTER_ACTIVE':
        $.map(state, (user) => {
            
        });
    }
}  

const middleware = applyMiddleware(logger);

let store = createStore(userReducer, initialUsers, middleware);

export default store;