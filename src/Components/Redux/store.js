import {combineReducers, createStore} from "redux";
import profileReducer from "./Reducers/profileReducer";
import messagesReducer from "./Reducers/messagesReducer";
import usersReducer from "./Reducers/usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer
});


 let store = createStore(reducers);

 window.store = store;

 export default store;