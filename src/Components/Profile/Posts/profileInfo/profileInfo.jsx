import React from "react";
import './profileInfo.css'

const ProfileInfo = (props) => {
    return (
            <div className="mainInfo">
                <img src="https://marvel-live.freetls.fastly.net/canvas/2018/11/926b68b39ac147cbab4adb5ec89b307b?quality=95&fake=.png" alt=""/>
                <div>
                    <div>Giorgi G.</div>
                    <div>Date of birth : 10 Oct</div>
                    <div>City : Tbilisi</div>
                </div>
            </div>
    )
}

export default ProfileInfo;