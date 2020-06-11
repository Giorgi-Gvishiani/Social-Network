import React from 'react';
import ProfileInfo from "./Posts/profileInfo/profileInfo";
import {MyPostContainer} from "./Posts/MyPosts/MyPostContainer";

const Profile = (props) => {
    return (
        <div className='profile'>
            <ProfileInfo />
            <MyPostContainer />
        </div>
    )
}

export default Profile;