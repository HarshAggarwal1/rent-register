import { combineReducers } from "@reduxjs/toolkit";
import menuReducer from "./menuReducer";
import menuOptionReducer from "./menuOptionReducer";
import detailsMenuReducer from "./detailsMenuReducer";

const reducers = combineReducers({
    menu: menuReducer,
    tab: menuOptionReducer,
    detailsMenu: detailsMenuReducer
});

export default reducers;