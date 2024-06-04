import { combineReducers } from "@reduxjs/toolkit";
import menuReducer from "./menuReducer";

const reducers = combineReducers({
    menu: menuReducer
});

export default reducers;