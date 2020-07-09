import {ProfileAPI, StatusAPI as ProfileStatusAPI} from "../../../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, likeCount: 39, postText: 'Hi, it\'s my first post'},
        {id: 2, likeCount: 13, postText: 'Hi, it\'s my second post'},
        {id: 3, likeCount: 27, postText: 'Hi, it\'s my third post'},
    ],

    newPostText: '',

    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }

        case ADD_POST :
            let newPost = {
                id: 4,
                likeCount: 0,
                postText: state.newPostText
            }
        case SET_USERS_PROFILE :
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS :
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

// ACTION CREATORS

export const updateNewPostText = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export const addPost = () => {
    return {type: ADD_POST}
}

export const setUsersProfile = (profile) => {
    return {type: SET_USERS_PROFILE, profile}
}

export const setStatus = (status) => {
    return {type: SET_STATUS, status}
}


// THUNK CREATORS

export const getProfile = (userId) => {
    return (dispatch) => {
        ProfileAPI.getUserProfile(userId)
            .then(response => {
                    dispatch(setUsersProfile(response.data))
                }
            )
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        ProfileAPI.getStatus(userId)
            .then(response => {
                    dispatch(setStatus(response.data))
                }
            )
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}


export default profileReducer;
