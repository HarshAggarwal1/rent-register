import { combineReducers } from "@reduxjs/toolkit";
import menuReducer from "./menuReducer";
import menuOptionReducer from "./menuOptionReducer";
import detailsMenuReducer from "./detailsMenuReducer";
import profilePageReducer from "./profilePageReducer";

const reducers = combineReducers({
    menu: menuReducer,
    tab: menuOptionReducer,
    detailsMenu: detailsMenuReducer,
    profilePage: profilePageReducer
});

export default reducers;