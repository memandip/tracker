import { 
    FETCH_USER, 
    ADD_USER, 
    UPDATE_USER, 
    DELETE_USER,
    SHOW_ALL 
} from '../constants';

export function fetchUser(users){
    return {type:FETCH_USER, users};
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