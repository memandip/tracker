import { 
    FETCH_USER, 
    ADD_USER, 
    UPDATE_USER, 
    DELETE_USER,
    SHOW_ALL 
} from './action.js';
import { combineReducers } from 'redux';

export const usersAvailable = {
    visibilityFilter: "SHOW_ALL",
    users:[]
}

function users(state = [], action){
    switch(action.type){
        case ADD_USER:
            return [state, action.user]
        case UPDATE_USER:
            return state.users.map( (user, index) => {
                    if(index === action.index){
                        Object.assign({}, user, {
                            user: action.user
                        });
                    }
                    return users;
                })
        case DELETE_USER:
            state.users.map( (user, index) => {
                if(index === action.index){
                    delete users.index;
                }
            })
            return state;
        default:
            return state;    
    }
}

function filterUsers(state = SHOW_ALL, action){
    switch(action.typ){
        case FETCH_USER:
            return Object.assign({}, state, {
                filter: action.filter
            })
        default:
            return state;    
    }
}

// function trackerApp(state = {}, action){
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         users: users(state.users,action)
//     };
// }

const trackerApp = combineReducers({
    filterUsers, 
    users
});

export default trackerApp;