import {combineReducers, createStore} from "redux";
import profileReducer from "./Reducers/profileReducer";
import messagesReducer from "./Reducers/messagesReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
});


 let store = createStore(reducers);

 export default store;