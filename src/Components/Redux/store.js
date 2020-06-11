import {combineReducers, createStore} from "redux";
import profileReducer from "./Reducers/profileReducer";

let reducers = combineReducers({
    profilePage: profileReducer
});


 let store = createStore(reducers);

 export default store;