import React from 'react';
import Posts from './Posts/Posts';
import s from './MyPost.module.css';
import ProfileForm from "../ProfileForm";

const MyPost = (props) => {

    let postsElements = props.posts.map(e => <Posts id={e.id} likeCount={e.likeCount} postText={e.postText} key={e.id}/>)


 const addNewPost = (formData) => {
     props.addPost(formData.profileForm)
 }

    return (
        <div className={s.mainContainer}>
            <div className={s.myPost}>My Posts</div>
            <ProfileForm onSubmit={addNewPost} />

            {postsElements}
        </div>
    )
}

export default MyPost;