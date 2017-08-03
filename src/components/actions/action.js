export const FETCH_USER = 'FETCH_USER';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const SHOW_ALL = 'SHOW_ALL';

export function fetchUser(users){
    return {type:FETCH_USER, users};
}

export function addUser(data){
    return {type:ADD_USER, data};
}

export function updateUser(id, data){
    return {type:UPDATE_USER, data};
}

export function deleteUser(id){
    return {type:UPDATE_USER, id};
}
