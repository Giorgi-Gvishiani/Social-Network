import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div>
            <NavLink className={s.item} to={`${'/Messages/'}${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default Dialogs;