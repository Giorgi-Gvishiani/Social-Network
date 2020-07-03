import {ProfileAPI} from "../../../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
    posts: [
        {id: 1, likeCount: 39, postText: 'Hi, it\'s my first post'},
        {id: 2, likeCount: 13, postText: 'Hi, it\'s my second post'},
        {id: 3, likeCount: 27, postText: 'Hi, it\'s my third post'},
    ],

    newPostText: '',

    profile: null
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
        default:
            return state;
    }
}

export const updateNewPostText = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export const addPost = () => {
    return {type: ADD_POST}
}

export const setUsersProfile = (profile) => {
    return {type: SET_USERS_PROFILE, profile}
}

export const getProfile = (userId) => {
    return (dispatch) => {
        ProfileAPI.getUserProfile(userId)
            .then(data => {
                    dispatch(setUsersProfile(data))
                }
            )
    }
}

export default profileReducer;