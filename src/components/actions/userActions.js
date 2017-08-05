import {
    ACTIVE_USER,
    FETCH_USER,
    FETCH_USERS,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER,
    SHOW_ALL
} from '../constants';

export function activeUser(user){
    return {type:ACTIVE_USER, payload: user};
}

export function fetchUser(user){
    return {type:FETCH_USER, payload: user};
}

export function fetchUsers(users = {}){
    return {type:FETCH_USERS, payload: users};
}

export function addUser(data){
    return {type:ADD_USER, data};
}

export function updateUser(id, data){
    return {type:UPDATE_USER, id, data};
}

export function deleteUser(id){
    return {type:DELETE_USER, id};
}