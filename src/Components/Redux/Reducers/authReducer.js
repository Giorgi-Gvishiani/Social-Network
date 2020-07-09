import {AuthAPI} from "../../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login) => {
    return {type: SET_USER_DATA, data: {userId, email, login}}
}

export const getAuth = () => {
    return (dispatch) => {
        AuthAPI.getAuth()
            .then(response => {
                    let {id, email, login} = response;
                    dispatch(setUserData(id, email, login))
                }
            )
    }
}


export default authReducer;