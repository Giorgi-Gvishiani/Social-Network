import React from "react";
import "./Header.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className='Header'>
            <img className='HeaderImg' src="https://marvel-live.freetls.fastly.net/canvas/2018/11/6ffaa98a51d44357ad91edb25fc8349c?quality=95&fake=.png" alt="icon"/>

            <div className='isLogin'>
                {props.isAuth ? props.login : <NavLink to='/login'>sign in</NavLink>}
            </div>
        </div>
    )
}

export default Header;