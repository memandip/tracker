import firebase from '../firebase.config';
import {
    FETCH_USER,
    FETCH_USERS,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER
} from  '../constants.js';

let userDb = firebase.database().ref().child('users');

const userReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_USER:
            return  action.payload
        case FETCH_USERS:
            return  action.payload;
        case ADD_USER:
            userDb.push(action.payload);
            return action.payload;
        case UPDATE_USER:
            userDb.child(action.id).set(action.payload)
            return action.payload;
        case DELETE_USER:
            userDb.child(action.id).remove();
            return true;
        default:
            return state;
    }
}
export default userReducer;
