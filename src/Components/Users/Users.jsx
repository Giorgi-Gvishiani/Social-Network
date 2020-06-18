import React from "react";
import s from './Users.module.css'
import defaultPhoto from './img/user.png'
import * as axios from "axios";

let Users = (props) => {
    if (props.users.length === 0) {
        props.SetUsers([
                axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                        props.SetUsers(response.data.items);
                    debugger
                    }
                )
            ]
        )
    }

    return <div>{
        props.users.map(u => <div className={s.mainContainer}>
                {/*<img src={u.photos.small !=null ? u.photos.small : userPhoto} className={s.userPhoto} alt="avatar"/>*/}
                <div className={s.nameAndBlock}>
                    <img src={defaultPhoto} alt="avatar" className={s.userPhoto}/>
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