import React, {useState} from "react";
import s from "./Users.module.css";
import defaultPhoto from "../../common/img/user.png";
import {NavLink} from "react-router-dom";
import Paginator from "../../common/Paginator/Paginator";


let Users = (props) => {

    return <div>
        <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                   currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
        {
            props.users.map(u => <div className={s.mainContainer} key={u.id}>
                    <div className={s.nameAndBlock}>
                        <NavLink to={`${'/profile/'}${u.id}`}><img
                            src={u.photos.small != null ? u.photos.small : defaultPhoto} alt="avatar"
                            className={s.userPhoto}/></NavLink>
                        <div>
                            {
                                u.followed
                                    ? <button className={s.btn} onClick={() => props.Unfollow(u.id)}>
                                        <div className={s.btnText}>Unfollow</div>
                                    </button>
                                    : <button className={s.btn} onClick={() => props.Follow(u.id)}>
                                        <div className={s.btnText}>Follow</div>
                                    </button>
                            }
                        </div>
                    </div>

                    <div className={s.border}>
                        <div className={s.infoContainer}>
                            <div className={s.name}>{u.name}</div>
                            {/*<div>{u.location.country}</div>*/}
                            {/*<div>{u.location.city}</div>*/}
                            <div className={s.status}>{u.status}</div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
}

export default Users;