import { ACTIVE_ADMIN, UPDATE_ADMIN } from '../constants';
import firebase from '../firebase.config';

const activeAdmin = (state = false, action) => {
    switch(action.type){
        case ACTIVE_ADMIN:
            state = action.payload;
            break;
        case UPDATE_ADMIN:
            let user = firebase.auth().currentUser;
            if(user){
                user.updateProfile(action.payload).then(function(){
                    state = user;
                })
            }
            break;
    }
    return state;
};

export default activeAdmin;