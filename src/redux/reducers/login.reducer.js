const loginReducer = (state = [], action) => {
    switch (action.type) {
        case 'STORE_LOGIN':
            return action.payload;
        default:
            return state;
    }
};

export default loginReducer;