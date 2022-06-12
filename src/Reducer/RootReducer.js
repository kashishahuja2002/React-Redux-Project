import { combineReducers } from "redux";
import reducer from "./reducer";

const RootReducer = combineReducers({
    users: reducer
});

export default RootReducer;	