import React from "react";

const Posts = (props) => {
    return (
        <div>
            <img src="#" alt=""/>
            <div>{props.postText}</div>
            <div>{props.likeCount} likes</div>
        </div>
    )
}

export default Posts;