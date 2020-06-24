import React from "react";
import s from "./profileInfo.module.css";
import Preloader from "../../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={s.mainContainer}>
                <img className={s.largePhoto}
                    src="https://marvel-live.freetls.fastly.net/canvas/2018/11/926b68b39ac147cbab4adb5ec89b307b?quality=95&fake=.png"
                    alt="Photo"/>
                <div>
                    <img src={props.profile.photos.large} className={s.avatarPhoto} alt="avatar"/>
                    <div>{props.profile.fullName}</div>
                    <div>Date of birth :</div>
                    <div>City :</div>
                </div>
            </div>
        )
    }
}

export default ProfileInfo;