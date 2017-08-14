const loginReducer = (state = false, action) => {
    switch(action.type){
        case 'LOGIN':
            state = action.payload;
    }
    return state;
}

export default loginReducer;