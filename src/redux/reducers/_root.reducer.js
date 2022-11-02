import { combineReducers } from "redux";

import searchReducer from "./search.reducer";

const rootReducer = combineReducers({
    // reducers go here
    searchReducer,
});

export default rootReducer;