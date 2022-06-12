import { fetchUsers } from "./fetchUsers";
import { fetchSingleUser } from "./fetchSingleUser";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    allUsers: fetchUsers,
    singleUser: fetchSingleUser
});

export default RootReducer;