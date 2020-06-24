import React from "react";
import ProfileInfo from "./MyPosts/profileInfo/profileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    return (
        <div className='profile'>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer />
        </div>
    )
}

export default Profile;