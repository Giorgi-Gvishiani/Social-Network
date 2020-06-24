import {connect} from "react-redux";
import MyPost from "./MyPost";
import {addPost, updateNewPostText} from "../../Redux/Reducers/profileReducer";




let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         updatePostText: (text) => {
//             dispatch(updateNewPostTextAC(text))
//         },
//         addPost: () => {
//             dispatch(addPostAC())
//         }
//     }
// }


export let MyPostContainer = connect(mapStateToProps, {updateNewPostText, addPost })(MyPost);