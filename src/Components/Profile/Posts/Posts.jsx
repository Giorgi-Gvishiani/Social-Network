import React from "react";
import ProfileInfo from "./profileInfo/profileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";

const Posts = (props) => {
    return (
        <div>
            <img src="#" alt=""/>
            <div>{props.postText}</div>
            <div>{props.likeCount}</div>

        </div>
    )
}

export default Posts;