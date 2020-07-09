import React from "react";
import s from "./profileInfo.module.css";
import Preloader from "../../../../common/Preloader/Preloader";
import defaultPhoto from "../../../../common/img/user.png";
import ProfileStatus from "./profileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={s.mainContainer}>
                <div>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : defaultPhoto}
                         className={s.avatarPhoto} alt="avatar"/>
                    <div>{props.profile.fullName}</div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        )
    }
}

export default ProfileInfo;