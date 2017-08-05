import { ACTIVE_USER } from '../constants';

const activeUser = (state = {}, action) => {
    switch(action.type){
        case ACTIVE_USER:
            return state = action.payload;
    }
    return state;
};

export default activeUser;