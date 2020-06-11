const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

let initialState = {
    posts: [
        {id: 1, likeCount: 39, postText: 'Hi, it\'s my first post'},
        {id: 2, likeCount: 13, postText: 'Hi, it\'s my second post'},
        {id: 3, likeCount: 27, postText: 'Hi, it\'s my third post'},
    ],

    newPostText: ''
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
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        default:
            return state;
    }
}

export const updateNewPostTextAC = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export const addPostAC = () => {
    return {type: ADD_POST}
}

export default profileReducer;