import React from 'react';
import Posts from './Posts/Posts';
import s from './MyPost.module.css';

const MyPost = (props) => {

    let postsElements = props.posts.map(e => <Posts id={e.id} likeCount={e.likeCount} postText={e.postText} key={e.id}/>)

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = (e) => {
        let currentText = e.target.value;
        props.updateNewPostText(currentText)
    }

    return (
        <div className={s.mainContainer}>
            <div className={s.myPost}>My Posts</div>
            <textarea className={s.textArea}
                      placeholder='your news...'
                      value={props.newPostText}
                      onChange={onPostChange}/>
            <div>
                <button className={s.btn} onClick={addPost}>Send</button>
            </div>

            {postsElements}
        </div>
    )
}

export default MyPost;