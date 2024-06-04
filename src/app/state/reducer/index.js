import { combineReducers } from "@reduxjs/toolkit";
import menuReducer from "./menuReducer";
import menuOptionReducer from "./menuOptionReducer";

const reducers = combineReducers({
    menu: menuReducer,
    tab: menuOptionReducer
});

export default reducers;