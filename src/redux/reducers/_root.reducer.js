import { combineReducers } from "redux";

import searchReducer from "./search.reducer";
import loginReducer from "./login.reducer";

const rootReducer = combineReducers({
    // reducers go here
    searchReducer, // TYPE: 'SHOW_SEARCH_RESULTS'
    loginReducer, // TYPE: 'STORE_LOGIN'
});

export default rootReducer;