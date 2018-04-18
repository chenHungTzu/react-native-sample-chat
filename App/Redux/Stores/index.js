//自製的store
import UserStore from "./UserStore";

//結合store , 賦予key
import { combineReducers } from "redux";

export default combineReducers({
    'UserStore' : UserStore
});

