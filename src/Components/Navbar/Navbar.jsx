import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className={s.navbar}>
            <nav className={s.refBlock}>
                <NavLink className={s.item} to={'/Profile'}>Profile</NavLink>
                <NavLink className={s.item} to={'/Messages'}>Messages</NavLink>
                <NavLink className={s.item} to={'/Users'}>Users</NavLink>
            </nav>
        </div>
    )
}

export default Navbar;