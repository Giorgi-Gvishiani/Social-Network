import {connect} from "react-redux";
import MyPost from "./MyPost";
import {addPost, updateNewPostText} from "../../Redux/Reducers/profileReducer";




let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

export let MyPostContainer = connect(mapStateToProps, {updateNewPostText, addPost})(MyPost);