import { ACTIVE_USER } from '../constants';

const activeUser = (state = {}, action) => {
    switch(action.type){
        case ACTIVE_USER:
            state = action.payload;
            break;
    }
    return state;
};

export default activeUser;