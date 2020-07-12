import React from "react";
import s from '../Profile/MyPosts/MyPost.module.css'
import {Field, reduxForm} from "redux-form";

let ProfileForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.formContainer}>
                <Field className={s.textArea} name={"profileForm"} component={"textarea"} type={"textarea"}
                       placeholder={"enter your text"}/>
                <div>
                    <button>add post</button>
                </div>
            </div>
        </form>
    )
}

ProfileForm = reduxForm({form: "profileForm"})(ProfileForm)

export default ProfileForm;