import React from "react";
import ProfileInfo from "./MyPosts/profileInfo/profileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    return (
        <div className='profile'>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer />
        </div>
    )
}

export default Profile;