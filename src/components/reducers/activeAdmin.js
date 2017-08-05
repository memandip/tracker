import { ACTIVE_ADMIN } from '../constants';

const activeAdmin = (state = {}, action) => {
    switch(action.type){
        case ACTIVE_ADMIN:
            return state = action.payload;
    }
    return state;
};

export default activeAdmin;