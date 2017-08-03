import firebase from '../firebase.config';
import { 
    FETCH_USER, 
    ADD_USER, 
    UPDATE_USER, 
    DELETE_USER,
    SHOW_ALL 
} from  '../constants.js';

let userDb = firebase.database().ref().child('users');

const userReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_USER:
            let state = {...state, users: action.payload}
            return state;
        case ADD_USER:
            userDb.push(action.payload);
            return state = {...state, user:action.payload}
        case UPDATE_USER:
            userDb.child(action.id).set(action.payload)
            return state = {...state, user:action.payload}
        case DELETE_USER:
            userDb.child(action.id).remove();
            return state = {...state, user:action.payload}                        
        default:
            return state;
    }
}

export default userReducer;