import { combineReducers } from "@reduxjs/toolkit";
import menuReducer from "./menuReducer";
import menuOptionReducer from "./menuOptionReducer";
import modalReducer from "./modalReducer";
import profilePageReducer from "./profilePageReducer";

const reducers = combineReducers({
    menu: menuReducer,
    tab: menuOptionReducer,
    modal: modalReducer,
    profilePage: profilePageReducer
});

export default reducers;