const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'SHOW_SEARCH_RESULTS':
            return action.payload;
        default:
            return state;
    }
};

export default searchReducer;